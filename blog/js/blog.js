import supabaseClient from '../../supabase.js';

async function fetchAndDisplayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = ''; // Clear existing content
    
    // Add skeleton loader
    const skeletonLoader = createSkeletonLoader();
    blogPostsContainer.appendChild(skeletonLoader);

    try {
        const { data: posts, error } = await supabaseClient
            .from('thecoffeejesus_blog')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw new Error(`Failed to fetch posts: ${error.message}`);

        // Remove skeleton loader
        blogPostsContainer.removeChild(skeletonLoader);

        const fragment = document.createDocumentFragment();

        // Add featured post
        const featuredPost = posts.find(post => post.is_featured) || posts[0];
        const featuredPostElement = createFeaturedPost(featuredPost);
        fragment.appendChild(featuredPostElement);

        // Create category filter
        const categories = [...new Set(posts.map(post => post.category))];
        const categoryFilter = createCategoryFilter(categories);
        fragment.appendChild(categoryFilter);

        posts.forEach(post => {
            if (post.id !== featuredPost.id) {
                const postElement = createPostElement(post);
                fragment.appendChild(postElement);
            }
        });

        blogPostsContainer.appendChild(fragment);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Remove skeleton loader
        blogPostsContainer.removeChild(skeletonLoader);
        displayErrorMessage('Could not load blog posts. Please try again later.');
    }
}

function createCategoryFilter(categories) {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'category-filter';
    filterContainer.innerHTML = `
        <label for="category-select">Filter by category:</label>
        <select id="category-select" class="category-select">
            <option value="all">All Categories</option>
            ${categories.map(category => `<option value="${category}">${category}</option>`).join('')}
        </select>
    `;

    filterContainer.querySelector('select').addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        filterPosts(selectedCategory);
    });

    return filterContainer;
}

function filterPosts(category) {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
            post.classList.remove('hidden');
            setTimeout(() => {
                post.style.display = 'block';
                requestAnimationFrame(() => {
                    post.style.opacity = '1';
                    post.style.transform = 'translateY(0)';
                });
            }, 10);
        } else {
            post.classList.add('hidden');
            post.style.opacity = '0';
            post.style.transform = 'translateY(20px)';
            setTimeout(() => {
                post.style.display = 'none';
            }, 300);
        }
    });
}

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.dataset.category = post.category;
    postElement.innerHTML = `
        ${post.featured_image ? `<img src="${sanitizeHTML(post.featured_image)}" alt="${sanitizeHTML(post.title)}" class="featured-image">` : ''}
        <h2 class="post-title">${sanitizeHTML(post.title)}</h2>
        <div class="post-meta">
            <span>By ${sanitizeHTML(post.author)}</span>
            <span> • </span>
            <span>${new Date(post.created_at).toLocaleDateString()}</span>
            <span> • </span>
            <span class="post-category">${sanitizeHTML(post.category)}</span>
        </div>
        <div class="post-content">${sanitizeHTML(truncateContent(post.content, 200))}</div>
        <a href="blog/blog-post.html?id=${post.id}" class="read-more">Read More</a>
    `;
    return postElement;
}

function truncateContent(content, maxLength) {
    if (content.length <= maxLength) return content;
    return content.substr(0, maxLength) + '...';
}

function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function displayErrorMessage(message) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = `<div class="error">${message}</div>`;
}

// Add this function
function createFeaturedPost(post) {
    const featuredPostElement = document.createElement('div');
    featuredPostElement.className = 'featured-post mb-12';
    featuredPostElement.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">Featured Post</h2>
        <div class="featured-post-content bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            ${post.featured_image ? `<img src="${sanitizeHTML(post.featured_image)}" alt="${sanitizeHTML(post.title)}" class="featured-image w-full h-64 object-cover">` : ''}
            <div class="p-6">
                <h3 class="text-2xl font-bold mb-2">${sanitizeHTML(post.title)}</h3>
                <div class="post-meta mb-4">
                    <span>By ${sanitizeHTML(post.author)}</span>
                    <span> • </span>
                    <span>${new Date(post.created_at).toLocaleDateString()}</span>
                    <span> • </span>
                    <span class="post-category">${sanitizeHTML(post.category)}</span>
                </div>
                <div class="post-content mb-4">${sanitizeHTML(truncateContent(post.content, 300))}</div>
                <a href="blog/blog-post.html?id=${post.id}" class="read-more">Read More</a>
            </div>
        </div>
    `;
    return featuredPostElement;
}

// Add this function
function createSkeletonLoader() {
    const skeletonLoader = document.createElement('div');
    skeletonLoader.className = 'skeleton-loader';
    skeletonLoader.innerHTML = `
        <div class="skeleton-post">
            <div class="skeleton skeleton-image"></div>
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-meta"></div>
            <div class="skeleton skeleton-content"></div>
        </div>
        <div class="skeleton-post">
            <div class="skeleton skeleton-image"></div>
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-meta"></div>
            <div class="skeleton skeleton-content"></div>
        </div>
    `;
    return skeletonLoader;
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayBlogPosts);
