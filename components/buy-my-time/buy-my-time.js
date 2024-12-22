class BuyMyTime extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                * {
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin: 0.5rem 0;
                    width: 100%;
                }
                .audit-container {
                    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
                    border-radius: 1rem;
                    padding: 1rem;
                    color: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    margin: 0 auto;
                    width: 100%;
                }
                .header {
                    text-align: center;
                    margin-bottom: 0.5rem;
                    margin-top: 0;
                    padding-top: 0;
                }
                .title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin: 0 0 0.25rem 0;
                    background: linear-gradient(45deg, #ff00ff, #00ffff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                .subtitle {
                    font-size: 1.1rem;
                    color: #cccccc;
                    margin-bottom: 0.75rem;
                }
                .stats {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                }
                .stat {
                    text-align: center;
                }
                .stat-number {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #ff00ff;
                }
                .stat-label {
                    color: #cccccc;
                }
                .features {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                .feature {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 1rem;
                    border-radius: 0.5rem;
                }
                .feature-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 0.25rem;
                    color: #00ffff;
                }
                .feature-text {
                    color: #cccccc;
                }
                .booking-options {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    margin: 1.5rem 0;
                    width: 100%;
                }
                .booking-option {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 1.5rem;
                    border-radius: 0.8rem;
                    text-align: center;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .option-title {
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #40ffff;
                    margin-bottom: 0.5rem;
                    text-shadow: 0 0 10px rgba(64, 255, 255, 0.5);
                }
                .option-price {
                    font-size: 2.25rem;
                    font-weight: bold;
                    color: #ff40ff;
                    margin-bottom: 1rem;
                    text-shadow: 0 0 10px rgba(255, 64, 255, 0.5);
                }
                .option-description {
                    color: #ffffff;
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                    line-height: 1.4;
                    font-weight: 500;
                }
                .payment-button {
                    display: block;
                    width: 100%;
                    padding: 1rem;
                    background: #0088ff;
                    color: white;
                    text-decoration: none;
                    border-radius: 0.5rem;
                    font-size: 1.2rem;
                    font-weight: bold;
                    transition: all 0.2s ease;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                }
                .payment-button:hover {
                    background: #0099ff;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 136, 255, 0.3);
                }
                .footer-note {
                    text-align: center;
                    color: #cccccc;
                    margin-top: 1.5rem;
                    font-size: 0.9rem;
                }
                .social-handle {
                    color: #ff00ff;
                    font-weight: bold;
                }
            </style>

            <div class="audit-container">
                <div class="header">
                    <h2 class="title">Buy My Time</h2>
                    <p class="subtitle">Learn how to thrive in the AI era and stay competitive in a rapidly evolving digital landscape</p>
                </div>

                <div class="stats">
                    <div class="stat">
                        <div class="stat-number">80K+</div>
                        <div class="stat-label">TikTok</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">50K+</div>
                        <div class="stat-label">Instagram</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">Infinite</div>
                        <div class="stat-label">Potential</div>
                    </div>
                </div>

                <div class="features">
                    <div class="feature">
                        <div class="feature-title">AI Strategy</div>
                        <div class="feature-text">Get personalized guidance on integrating AI into your workflow and business</div>
                    </div>
                    <div class="feature">
                        <div class="feature-title">Risk Assessment</div>
                        <div class="feature-text">Understand AI's impact on your industry and how to stay ahead</div>
                    </div>
                    <div class="feature">
                        <div class="feature-title">Future Planning</div>
                        <div class="feature-text">Develop a roadmap for thriving in an AI-driven world</div>
                    </div>
                </div>

                <div class="booking-options">
                    <div class="booking-option">
                        <div class="option-title">Quick Audit</div>
                        <div class="option-price">$10</div>
                        <div class="option-description">15-minute AI readiness assessment</div>
                        <a href="https://buy.stripe.com/8wM16I5jb76f1yg147" class="payment-button">Book an Assessment</a>
                    </div>
                    <div class="booking-option">
                        <div class="option-title">Deep Dive</div>
                        <div class="option-price">$30</div>
                        <div class="option-description">30-minute AI strategy consultation</div>
                        <a href="https://buy.stripe.com/28o4iUfXP2PZ6SA148" class="payment-button">Book a Strategy Session</a>
                    </div>
                    <div class="booking-option">
                        <div class="option-title">Full Strategy</div>
                        <div class="option-price">$60</div>
                        <div class="option-description">60-minute comprehensive AI roadmap planning</div>
                        <a href="https://buy.stripe.com/dR64iU3b32PZ3Go6ot" class="payment-button">Book a Roadmap Session</a>
                    </div>
                </div>

                <p class="footer-note">
                    After payment, you'll be directed to schedule your session through my calendar.<br>
                    Questions? Message me on social media <a href="https://solo.to/thecoffeejesus" class="social-handle">@thecoffeejesus</a>
                </p>
            </div>
        `;
    }
}

customElements.define('buy-my-time', BuyMyTime);