import supabaseClient from '../../supabase.js';

async function fetchAndDisplayBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        displayErrorMessage('No blog post ID provided.');
        return;
    }

    try {
        const spinner = document.querySelector('.loading-spinner');
        spinner.classList.remove('hidden'); // Show spinner

        const { data: post, error } = await supabaseClient
            .from('thecoffeejesus_blog')
            .select('*')
            .eq('id', postId)
            .single();

        if (error) throw error;

        if (!post) {
            displayErrorMessage('Blog post not found.');
            spinner.classList.add('hidden'); // Hide spinner
            return;
        }

        displayBlogPost(post);
        spinner.classList.add('hidden'); // Hide spinner after content is loaded
    } catch (error) {
        console.error('Error fetching blog post:', error);
        displayErrorMessage('Could not load blog post. Please try again later.');
        const spinner = document.querySelector('.loading-spinner');
        spinner.classList.add('hidden'); // Hide spinner on error
    }
}

function displayBlogPost(post) {
    const blogPostContainer = document.getElementById('blog-post');
    const parsedContent = marked.parse(post.content);
    const readingTime = estimateReadingTime(post.content);

    blogPostContainer.innerHTML = `
        ${post.featured_image ? `
        <div class="featured-image-container">
            <img src="${sanitizeHTML(post.featured_image)}" alt="${sanitizeHTML(post.title)}" class="featured-image" loading="lazy">
        </div>` : ''}
        <div class="post-content-wrapper">
            <h1 class="post-title">${sanitizeHTML(post.title)}</h1>
            <div class="post-meta">
                <span><i class="fas fa-user"></i> ${sanitizeHTML(post.author)}</span>
                <span><i class="fas fa-calendar-alt"></i> ${new Date(post.created_at).toLocaleDateString()}</span>
                ${post.category ? `<span><i class="fas fa-tag"></i> ${sanitizeHTML(post.category)}</span>` : ''}
                <span><i class="fas fa-clock"></i> ${readingTime} min read</span>
            </div>
            <div class="post-content">${parsedContent}</div>
            <div class="post-footer">
                <button class="share-button" onclick="sharePost()">
                    <i class="fas fa-share-alt"></i> Share
                </button>
            </div>
        </div>
    `;

    // Initialize animations after content is inserted
    initScrollAnimations();
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
        if (darkModeToggle) darkModeToggle.checked = true;
    } else {
        htmlElement.classList.remove('dark');
        if (darkModeToggle) darkModeToggle.checked = false;
    }

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            htmlElement.classList.toggle('dark');
            localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        console.log('Intersection entry:', entry);
        if (entry.isIntersecting) {
            const animationClass = entry.target.dataset.animation || 'fadeIn';
            entry.target.classList.add('animate__animated', `animate__${animationClass}`, 'animate');
            observer.unobserve(entry.target);
        }
    });
}

// Initialize IntersectionObserver with multiple thresholds and rootMargin for better detection
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.05, 0.1, 0.25, 0.5, 0.75, 1]
});

function initScrollAnimations() {
    const contentElements = document.querySelectorAll('.post-content > *');
    if (contentElements.length === 0) {
        console.warn('No content elements found for scroll animations.');
    }
    contentElements.forEach(el => {
        el.classList.add('animate__animated'); // Ensure the animated class is present
        observer.observe(el);
    });
}

// Fallback: Show all content if IntersectionObserver is not supported
if (!('IntersectionObserver' in window)) {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.post-content > *').forEach(el => {
            el.classList.add('animate__fadeIn', 'animate');
        });
    });
}

// Initialize Scroll-to-Top Button
function initScrollToTop() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show after scrolling 300px
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll smoothly to the top when the button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Stars generation optimization
function generateStars() {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = window.innerWidth <= 768 ? 100 : 200; // Reduce stars on smaller screens

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 2 + 1}px`; // Slightly smaller stars
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${5 + Math.random() * 10}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
}

// Call generateStars on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayBlogPost().then(() => {
        initDarkMode();
        initScrollToTop(); // Existing function
        initBackToTop();   // New function
    });
});

// Back-to-Top Button Functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (!backToTopBtn) {
        console.warn('Back-to-Top button not found!');
        return;
    }

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('hidden');
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
            backToTopBtn.classList.add('hidden');
        }
    });

    // Scroll smoothly to the top when the button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
