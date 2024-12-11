class SocialTicker extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="grid grid-cols-2 gap-24 text-white text-5xl font-bold">
                <div class="flex items-center space-x-4">
                    <i class="fab fa-tiktok text-6xl"></i>
                    <div class="flex items-baseline">
                        <span class="follower-count text-6xl" data-target="80">0</span>
                        <span class="text-4xl ml-1">K</span>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <i class="fab fa-instagram text-6xl"></i>
                    <div class="flex items-baseline">
                        <span class="follower-count text-6xl" data-target="45">0</span>
                        <span class="text-4xl ml-1">K</span>
                    </div>
                </div>
            </div>
        `;

        this.initializeCounters();
    }

    initializeCounters() {
        const counters = this.querySelectorAll('.follower-count');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
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

            // Start the animation when the element is in view
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

customElements.define('social-ticker', SocialTicker);