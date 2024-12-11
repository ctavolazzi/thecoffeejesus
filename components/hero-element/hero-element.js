class HeroElement extends HTMLElement {
    constructor() {
        super();
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
                    font-size: 1.75rem;
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    background: #000000;
                    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
                    transition: all 0.2s ease;
                    color: white;
                }
                .social-icon:hover {
                    transform: translateY(-2px);
                    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.5),
                               -3px -3px 10px rgba(255, 255, 255, 0.15);
                }
                .social-icon i {
                    color: white;
                    -webkit-text-stroke: 0;
                    text-stroke: 0;
                }
                .social-icon.tiktok {
                    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
                }
                .social-icon.instagram {
                    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
                }
                .social-stats-container {
                    position: absolute;
                    top: 1.25rem;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: space-around;
                    padding: 0 3rem;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .social-row {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .stats {
                    display: flex;
                    align-items: baseline;
                    min-width: 90px;
                    gap: 0.25rem;
                }
                .follower-count {
                    min-width: 55px;
                    text-align: right;
                    font-size: 2.75rem;
                    font-weight: 900;
                    letter-spacing: -0.02em;
                }
                .k-text {
                    font-size: 2rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    transform: translateY(2px);
                    text-shadow:
                        -1px -1px 0 #000,
                        1px -1px 0 #000,
                        -1px 1px 0 #000,
                        1px 1px 0 #000;
                }
                .hero-tagline {
                    position: absolute;
                    bottom: 2rem;
                    left: 0;
                    right: 0;
                    text-align: center;
                    color: white;
                    padding: 0 1rem;
                }
                .tagline-main {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    text-shadow:
                        2px 2px 4px rgba(0,0,0,0.5),
                        0 0 10px rgba(0,0,0,0.3);
                }
                .tagline-sub {
                    font-size: 1.1rem;
                    font-weight: 500;
                    opacity: 0.95;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                    text-shadow:
                        1px 1px 2px rgba(0,0,0,0.8),
                        0 0 8px rgba(0,0,0,0.4);
                    letter-spacing: 0.01em;
                }
            </style>
            <div class="relative">
                <img src="/static/hero_image.png" alt="TheCoffeeJesus in cherry blossoms" class="w-full h-auto rounded-lg shadow-2xl">
                <div class="social-stats-container">
                    <div class="social-row">
                        <div class="social-icon tiktok">
                            <i class="fab fa-tiktok"></i>
                        </div>
                        <div class="stats">
                            <span class="follower-count social-text" data-target="80">0</span>
                            <span class="k-text ml-1 social-text">K</span>
                        </div>
                    </div>
                    <div class="social-row">
                        <div class="social-icon instagram">
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div class="stats">
                            <span class="follower-count social-text" data-target="45">0</span>
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