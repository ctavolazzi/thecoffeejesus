class HeroElement extends HTMLElement {
    constructor() {
        super();
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];

        this.innerHTML = `
            <style>
                .social-text {
                    color: white;
                    text-shadow:
                        -1px -1px 0 #000,
                        1px -1px 0 #000,
                        -1px 1px 0 #000,
                        1px 1px 0 #000,
                        0 2px 4px rgba(0,0,0,0.3);
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                .social-icon {
                    font-size: 0.7rem;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 3px;
                    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
                    transition: all 0.3s ease;
                    color: white;
                    text-decoration: none;
                    margin: 0 2px;
                }
                .social-icon:hover {
                    transform: translateY(-3px) scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
                }
                .social-icon i {
                    color: white;
                    -webkit-text-stroke: 0;
                    text-stroke: 0;
                }
                .social-icon.tiktok {
                    background: #000000;
                    background: linear-gradient(45deg, #00f2ea, #ff0050);
                }
                .social-icon.instagram {
                    background: #d6249f;
                    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
                }
                .social-icon.youtube {
                    background: #FF0000;
                    background: linear-gradient(45deg, #FF0000, #CC0000);
                }
                .social-stats-container {
                    position: absolute;
                    top: 0.5rem;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0 1rem;
                    max-width: 300px;
                    margin: 0 auto;
                }
                .social-row {
                    display: flex;
                    align-items: center;
                    gap: 0.2rem;
                    background: rgba(0, 0, 0, 0.6);
                    padding: 0.15rem 0.3rem;
                    border-radius: 4px;
                    backdrop-filter: blur(8px);
                }
                .stats {
                    display: flex;
                    align-items: baseline;
                    min-width: 40px;
                    gap: 0.15rem;
                }
                .follower-count {
                    min-width: 25px;
                    text-align: right;
                    font-size: 0.9rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                }
                .k-text {
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    opacity: 0.9;
                }
                .hero-tagline {
                    position: absolute;
                    bottom: 0.75rem;
                    left: 0;
                    right: 0;
                    text-align: center;
                    color: white;
                    padding: 1rem;
                    transform: translateY(1.8rem);
                }
                .tagline-main {
                    font-size: 2.75rem;
                    font-weight: 900;
                    margin-bottom: 0.75rem;
                    line-height: 1.1;
                    color: rgba(255, 255, 255, 0.95);
                    text-shadow:
                        2px 2px 0 #000,
                        -2px -2px 0 #000,
                        2px -2px 0 #000,
                        -2px 2px 0 #000,
                        4px 4px 8px rgba(0, 0, 0, 0.5),
                        0 0 20px rgba(255, 255, 255, 0.2);
                    transform: perspective(500px) rotateX(5deg);
                    letter-spacing: -0.02em;
                }
                .tagline-sub {
                    font-size: 1.15rem;
                    font-weight: 600;
                    max-width: 500px;
                    margin: 0 auto;
                    line-height: 1.3;
                    letter-spacing: 0;
                    background: rgba(0, 0, 0, 0.6);
                    padding: 0.5rem 0.75rem;
                    border-radius: 4px;
                    display: inline-block;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
                }
            </style>
            <div class="relative">
                <img src="/static/hero_image.png?date=${formattedDate}" alt="TheCoffeeJesus in cherry blossoms" class="w-full h-auto rounded-lg shadow-2xl">
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