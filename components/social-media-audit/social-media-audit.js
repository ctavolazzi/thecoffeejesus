class SocialMediaAudit extends HTMLElement {
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
                :host {
                    display: block;
                    margin: 2rem 0;
                }
                .audit-container {
                    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
                    border-radius: 1rem;
                    padding: 2rem;
                    color: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    margin: 0 auto;
                }
                .header {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                .title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    background: linear-gradient(45deg, #ff00ff, #00ffff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                .subtitle {
                    font-size: 1.2rem;
                    color: #cccccc;
                    margin-bottom: 1.5rem;
                }
                .features {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .feature {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                }
                .feature-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    color: #00ffff;
                }
                .feature-text {
                    color: #cccccc;
                }
                .stats {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin-bottom: 2rem;
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
                .cta-container {
                    text-align: center;
                }
                .price {
                    font-size: 3rem;
                    font-weight: bold;
                    color: #00ffff;
                    margin-bottom: 1rem;
                }
                .price-note {
                    color: #cccccc;
                    margin-bottom: 1.5rem;
                }
            </style>

            <div class="audit-container">
                <div class="header">
                    <h2 class="title">Quick Social Media Audit</h2>
                    <p class="subtitle">Leverage my experience growing 150,000+ followers across platforms</p>
                </div>

                <div class="stats">
                    <div class="stat">
                        <div class="stat-number">100K+</div>
                        <div class="stat-label">TikTok Followers</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">50K+</div>
                        <div class="stat-label">Instagram Followers</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">∞</div>
                        <div class="stat-label">Growth Potential</div>
                    </div>
                </div>

                <div class="features">
                    <div class="feature">
                        <div class="feature-title">Platform Strategy</div>
                        <div class="feature-text">Get personalized insights on which platforms will work best for your goals</div>
                    </div>
                    <div class="feature">
                        <div class="feature-title">Content Analysis</div>
                        <div class="feature-text">Learn what content types resonate with your target audience</div>
                    </div>
                    <div class="feature">
                        <div class="feature-title">Growth Tactics</div>
                        <div class="feature-text">Discover proven strategies to accelerate your social media growth</div>
                    </div>
                </div>

                <div class="cta-container">
                    <div class="price">$10</div>
                    <p class="price-note">One-time consultation including personalized action plan</p>
                    <stripe-buy-button
                        buy-button-id="buy_btn_1QYwlPIaz5bakrUGVYjciwzY"
                        publishable-key="pk_live_51PMf4iIaz5bakrUGmOOLdydmU7mJnv0Frk14g3xiXBdhcyq24HoANVyuHU5eAfhufPdhPlw2qFWy1nBiiQIDATFR00ni7lGGQY">
                    </stripe-buy-button>
                </div>
            </div>
        `;
    }
}

customElements.define('social-media-audit', SocialMediaAudit);