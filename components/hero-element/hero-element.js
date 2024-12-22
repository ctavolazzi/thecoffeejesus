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
                    margin: 0.5rem 0;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }
            </style>
            <div class="hero-container">
                <img src="/static/hero_image.png?date=${formattedDate}" alt="TheCoffeeJesus in cherry blossoms" class="hero-image">
            </div>
        `;
    }
}

customElements.define('hero-element', HeroElement);