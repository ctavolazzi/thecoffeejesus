class MultiversePortal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Add Font Awesome to shadow DOM
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        this.shadowRoot.appendChild(fontAwesome);

        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/multiverse-portal/portal.css';
        this.shadowRoot.appendChild(link);

        this.render();
    }

    render() {
        this.shadowRoot.innerHTML += `
            <div class="multiverse-section">
                <h2 class="multiverse-title">Join the Multiverse</h2>
                <div class="multiverse-container">
                    <div class="dimensional-fold"></div>
                    <div class="time-distortion"></div>
                    <div class="dimensional-rift"></div>
                    <div class="glow-effect"></div>
                    <div class="multiverse-portal">
                        <div class="portal-ring"></div>
                        <div class="portal-ring"></div>
                        <div class="portal-ring"></div>
                        <a href="https://themultiverse.school/" class="multiverse-button" aria-label="Join The Multiverse">
                            <i class="fas fa-arrow-right"></i>
                            Join The Multiverse
                            <i class="fas fa-arrow-left"></i>
                        </a>
                    </div>
                    <div class="particles">
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                    </div>
                    <div class="quantum-particles">
                        <div class="quantum-particle"></div>
                        <div class="quantum-particle"></div>
                        <div class="quantum-particle"></div>
                    </div>
                    <div class="cosmic-dust">
                        <div class="cosmic-dust-particle"></div>
                        <div class="cosmic-dust-particle"></div>
                        <div class="cosmic-dust-particle"></div>
                        <div class="cosmic-dust-particle"></div>
                        <div class="cosmic-dust-particle"></div>
                    </div>
                    <div class="energy-beam"></div>
                    <div class="energy-beam" style="transform: rotate(60deg);"></div>
                    <div class="energy-beam" style="transform: rotate(120deg);"></div>
                    <div class="quantum-entanglement"></div>
                    <div class="cosmic-strings"></div>
                    <div class="particle-burst">
                        <div class="burst-particle"></div>
                        <div class="burst-particle"></div>
                        <div class="burst-particle"></div>
                        <div class="burst-particle"></div>
                        <div class="burst-particle"></div>
                    </div>
                    <div class="cosmic-wave"></div>
                </div>
            </div>
        `;

        // Add click handler to container
        const container = this.shadowRoot.querySelector('.multiverse-container');
        container.addEventListener('click', () => {
            window.location.href = 'https://themultiverse.school/';
        });
    }
}

customElements.define('multiverse-portal', MultiversePortal);