class HeroElement extends HTMLElement {
    constructor() {
        super();
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];

        this.innerHTML = `
            <style>
                .hero-container {
                    margin: 0 auto;
                    max-width: 1100px;
                    padding: 0 1rem;
                    background: #1a1b26;
                }
                .hero-title {
                    font-size: 4rem;
                    font-weight: 800;
                    text-align: center;
                    margin-bottom: 2rem;
                    background: linear-gradient(45deg, #00f2ea, #4facfe, #b465da);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    line-height: 1.1;
                }
                .hero-image {
                    width: 100%;
                    height: auto;
                    max-height: 65vh;
                    object-fit: cover;
                    border-radius: 1rem;
                    margin: 1rem 0;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }
                .social-stats-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                }
                .social-row {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(0, 0, 0, 0.5);
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                }
                .social-text {
                    color: white;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                .social-icon {
                    font-size: 1.2rem;
                    color: white;
                    text-decoration: none;
                }
                .stats {
                    display: flex;
                    align-items: baseline;
                    gap: 0.2rem;
                }
                .follower-count {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: white;
                }
                .k-text {
                    font-size: 1rem;
                    font-weight: 500;
                    color: white;
                }
                .hero-tagline {
                    position: absolute;
                    bottom: 1.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    width: 100%;
                }
                .tagline-main {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 0.75rem;
                    background: linear-gradient(45deg, #2193b0, #6dd5ed);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .tagline-sub {
                    font-size: 1.2rem;
                    font-weight: 500;
                    color: white;
                    background: rgba(0, 0, 0, 0.5);
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    display: inline-block;
                }
            </style>
            <div class="hero-container">
                <img src="/static/hero_image.png?date=${formattedDate}" alt="TheCoffeeJesus in cherry blossoms" class="hero-image">
                <div class="social-stats-container">
                    <div class="social-row">
                        <a href="https://www.tiktok.com/@thecoffeejesus" target="_blank" rel="noopener noreferrer" class="social-icon tiktok">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <div class="stats">
                            <span class="follower-count social-text" data-target="80">0</span>
                            <span class="k-text ml-1 social-text">K</span>
                        </div>
                    </div>
                    <div class="social-row">
                        <a href="https://www.youtube.com/@thecoffeejesus" target="_blank" rel="noopener noreferrer" class="social-icon youtube">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <div class="stats">
                            <span class="follower-count social-text" data-target="538">0</span>
                        </div>
                    </div>
                    <div class="social-row">
                        <a href="https://www.instagram.com/thecoffeejesus" target="_blank" rel="noopener noreferrer" class="social-icon instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <div class="stats">
                            <span class="follower-count social-text" data-target="52">0</span>
                            <span class="k-text ml-1 social-text">K</span>
                        </div>
                    </div>
                </div>
                <div class="hero-tagline">
                    <div class="tagline-main">More Than Coffee</div>
                    <div class="tagline-sub">Building a community of dreamers, doers, and difference makers.</div>
                </div>
            </div>
        `;

        this.initializeCounters();
    }

    initializeCounters() {
        const counters = this.querySelectorAll('.follower-count');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const steps = 50;
            const increment = target / steps;
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current).toLocaleString();
                    setTimeout(updateCounter, duration / steps);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(counter);
        });
    }
}

customElements.define('hero-element', HeroElement);