import supabaseClient from '../../supabase.js';

async function fetchAndDisplayBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        displayErrorMessage('No blog post ID provided.');
        return;
    }

    try {
        const { data: post, error } = await supabaseClient
            .from('thecoffeejesus_blog')
            .select('*')
            .eq('id', postId)
            .single();

        if (error) throw error;

        if (!post) {
            displayErrorMessage('Blog post not found.');
            return;
        }

        displayBlogPost(post);
    } catch (error) {
        console.error('Error fetching blog post:', error);
        displayErrorMessage('Could not load blog post. Please try again later.');
    }
}

function displayBlogPost(post) {
    const blogPostContainer = document.getElementById('blog-post');
    const parsedContent = marked.parse(post.content);
    const readingTime = estimateReadingTime(post.content);

    blogPostContainer.innerHTML = `
        ${post.featured_image ? `
        <div class="featured-image-container">
            <img src="${sanitizeHTML(post.featured_image)}" alt="${sanitizeHTML(post.title)}" class="featured-image">
        </div>` : ''}
        <div class="post-content-wrapper">
            <h1 class="post-title">${sanitizeHTML(post.title)}</h1>
            <div class="post-meta">
                <span><i class="fas fa-user"></i> ${sanitizeHTML(post.author)}</span>
                <span><i class="fas fa-calendar-alt"></i> ${new Date(post.created_at).toLocaleDateString()}</span>
                ${post.category ? `<span><i class="fas fa-tag"></i> ${sanitizeHTML(post.category)}</span>` : ''}
                <span><i class="fas fa-clock"></i> ${readingTime} min read</span>
            </div>
            <div id="table-of-contents" class="toc"></div>
            <div class="post-content">${parsedContent}</div>
            <div class="post-footer">
                <button class="share-button" onclick="sharePost()">
                    <i class="fas fa-share-alt"></i> Share
                </button>
            </div>
        </div>
    `;

    // Add scroll to top button
    const scrollToTopButton = document.createElement('div');
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopButton);

    // Scroll to top functionality
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    generateTableOfContents();
}

function estimateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

function generateTableOfContents() {
    const headings = document.querySelectorAll('.post-content h2, .post-content h3');
    const toc = document.getElementById('table-of-contents');
    
    if (headings.length > 2) {
        const tocList = document.createElement('ul');
        tocList.className = 'toc-list';
        
        headings.forEach((heading, index) => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = heading.textContent;
            link.href = `#heading-${index}`;
            listItem.appendChild(link);
            tocList.appendChild(listItem);
            
            heading.id = `heading-${index}`;
        });
        
        toc.innerHTML = '<h2>Table of Contents</h2>';
        toc.appendChild(tocList);
    } else {
        toc.style.display = 'none';
    }
}

// Make sharePost globally accessible
window.sharePost = function() {
    if (navigator.share) {
        navigator.share({
            title: document.querySelector('.post-title').textContent,
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Web Share API not supported in your browser. You can manually copy the URL to share this post.');
    }
}

function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function displayErrorMessage(message) {
    const blogPostContainer = document.getElementById('blog-post');
    blogPostContainer.innerHTML = `<div class="error">${message}</div>`;
}

// Dark mode toggle functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add('dark');
        darkModeToggle.checked = true;
    } else {
        htmlElement.classList.remove('dark');
        darkModeToggle.checked = false;
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('change', () => {
        htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
    });
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.1
});

function initScrollAnimations() {
    document.querySelectorAll('.post-content > *').forEach(el => {
        observer.observe(el);
    });
}

// Modify the existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayBlogPost().then(() => {
        initScrollAnimations();
        initDarkMode();
    });
});
