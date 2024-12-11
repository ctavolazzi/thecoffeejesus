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

    // Initialize any necessary functionalities after content is inserted
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

// Dark mode toggle functionality is handled by darkMode.js

document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayBlogPost().then(() => {
        // Removed initDarkMode() as darkMode.js handles it
        // If you have other initializations, keep them here
    });
});
