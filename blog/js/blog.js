import supabaseClient from '../../supabase.js';

async function fetchAndDisplayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    if (!blogPostsContainer) return;

    blogPostsContainer.innerHTML = '';
    
    const skeletonLoader = createSkeletonLoader();
    blogPostsContainer.appendChild(skeletonLoader);

    try {
        const { data: posts, error } = await supabaseClient
            .from('thecoffeejesus_blog')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw new Error(`Failed to fetch posts: ${error.message}`);

        blogPostsContainer.removeChild(skeletonLoader);

        const fragment = document.createDocumentFragment();

        const featuredPost = posts.find(post => post.is_featured) || posts[0];
        const featuredPostElement = createFeaturedPost(featuredPost);
        fragment.appendChild(featuredPostElement);

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
    postElement.className = 'post animate__animated animate__fadeIn';
    postElement.dataset.category = post.category;
    postElement.innerHTML = `
        ${post.featured_image ? `<img src="${sanitizeHTML(post.featured_image)}" alt="${sanitizeHTML(post.title)}" class="featured-image">` : ''}
        <h2 class="post-title">${sanitizeHTML(post.title)}</h2>
        <div class="post-meta">
            <span><i class="fas fa-user"></i> ${sanitizeHTML(post.author)}</span>
            <span><i class="fas fa-calendar-alt"></i> ${new Date(post.created_at).toLocaleDateString()}</span>
            <span><i class="fas fa-tag"></i> ${sanitizeHTML(post.category)}</span>
        </div>
        <div class="post-content">${sanitizeHTML(post.excerpt || truncateContent(post.content, 200))}</div>
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
    featuredPostElement.className = 'featured-post post animate__animated animate__fadeIn';
    featuredPostElement.innerHTML = `
        <div class="featured-image-container">
            ${post.featured_image ? `<img src="${sanitizeHTML(post.featured_image)}" alt="${sanitizeHTML(post.title)}" class="featured-image">` : ''}
        </div>
        <div class="featured-content">
            <h2 class="post-title">${sanitizeHTML(post.title)}</h2>
            <div class="post-meta">
                <span><i class="fas fa-user"></i> ${sanitizeHTML(post.author)}</span>
                <span><i class="fas fa-calendar-alt"></i> ${new Date(post.created_at).toLocaleDateString()}</span>
                <span><i class="fas fa-tag"></i> ${sanitizeHTML(post.category)}</span>
            </div>
            <div class="post-content">${sanitizeHTML(post.excerpt || truncateContent(post.content, 200))}</div>
            <a href="blog/blog-post.html?id=${post.id}" class="read-more">Read More</a>
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

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}

function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.1
        });

        document.querySelectorAll('.post').forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('.post').forEach(el => {
            el.classList.add('animate');
        });
    }
}

// Use DOMContentLoaded for modern browsers, and a fallback for older ones
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBlog);
} else {
    initializeBlog();
}

function initializeBlog() {
    fetchAndDisplayBlogPosts().then(() => {
        initScrollAnimations();
    });

    const blogTitle = document.getElementById('blogTitle');
    const coffeeCup = document.getElementById('coffeeCup');

    if (blogTitle) {
        blogTitle.style.opacity = '0';
        blogTitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            blogTitle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            blogTitle.style.opacity = '1';
            blogTitle.style.transform = 'translateY(0)';
        }, 100);
    }

    if (coffeeCup) {
        coffeeCup.addEventListener('click', (e) => {
            coffeeCup.style.transform = 'scale(1.2) rotate(10deg)';
            setTimeout(() => {
                coffeeCup.style.transform = '';
            }, 300);
        });
    }

    const titleContainer = document.querySelector('.blog-title-container');
    if (titleContainer) {
        const coffeeEmojis = ['☕', '🫖', '🍵'];
        
        for (let i = 0; i < 10; i++) {  // Increased from 5 to 10
            const bean = document.createElement('span');
            bean.textContent = coffeeEmojis[Math.floor(Math.random() * coffeeEmojis.length)];
            bean.classList.add('coffee-beans');
            bean.style.setProperty('--tx', `${Math.random() * 100 - 50}px`);
            bean.style.setProperty('--ty', `${-Math.random() * 50 - 50}px`);
            bean.style.setProperty('--r', `${Math.random() * 360}deg`);
            bean.style.top = `${Math.random() * 100}%`;
            bean.style.left = `${Math.random() * 100}%`;
            titleContainer.appendChild(bean);
        }

        // Add more sparkles
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('span');
            sparkle.classList.add('sparkle');
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.left = `${Math.random() * 100}%`;
            titleContainer.appendChild(sparkle);
        }

        // Add more coffee rings
        for (let i = 0; i < 3; i++) {
            const ring = document.createElement('span');
            ring.classList.add('coffee-ring');
            ring.style.top = `${Math.random() * 100}%`;
            ring.style.left = `${Math.random() * 100}%`;
            titleContainer.appendChild(ring);
        }

        // Add coffee stains
        for (let i = 0; i < 2; i++) {
            const stain = document.createElement('span');
            stain.classList.add('coffee-stain');
            stain.style.top = `${Math.random() * 100}%`;
            stain.style.left = `${Math.random() * 100}%`;
            titleContainer.appendChild(stain);
        }

        const coffeeCup = document.querySelector('.coffee-cup');
        const steam = document.createElement('span');
        steam.textContent = '☁️';
        steam.classList.add('steam');
        coffeeCup.appendChild(steam);
    }
}

function createBlogPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl relative';
    
    postElement.innerHTML = `
        ${post.featured_image ? `<img src="${sanitizeHTML(post.featured_image)}" alt="${sanitizeHTML(post.title)}" class="w-full h-48 object-cover">` : ''}
        <div class="p-6">
            <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">${sanitizeHTML(post.title)}</h2>
            <div class="post-meta mb-4">
                <span><i class="fas fa-user"></i> ${sanitizeHTML(post.author)}</span>
                <span><i class="fas fa-calendar-alt"></i> ${new Date(post.created_at).toLocaleDateString()}</span>
                <span><i class="fas fa-tag"></i> ${sanitizeHTML(post.category)}</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">${sanitizeHTML(truncateContent(post.content, 150))}</p>
            <a href="blog/blog-post.html?id=${post.id}" class="read-more">Read More</a>
        </div>
    `;
    return postElement;
}



