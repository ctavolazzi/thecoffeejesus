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
                    background: linear-gradient(135deg, rgba(42, 42, 42, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%);
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
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #ff00ff;
                }
                .stat-label {
                    font-size: 0.9rem;
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
                    background: rgba(255, 255, 255, 0.02);
                    padding: 1.5rem;
                    border-radius: 0.8rem;
                    text-align: center;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                }
                .value-star {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    background: linear-gradient(135deg, #0066cc, #004499);
                    padding: 8px 20px;
                    border-radius: 25px;
                    border: 2px solid #ffd700;
                    box-shadow:
                        0 0 20px rgba(0, 102, 204, 0.4),
                        inset 0 0 10px rgba(255, 215, 0, 0.3);
                    z-index: 1;
                    width: fit-content;
                    margin: 0 auto 1rem auto;
                }
                .value-star::before {
                    content: "🏆";
                    font-size: 1.4rem;
                    filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
                }
                .value-star::after {
                    content: "Most Popular";
                    font-size: 1.1rem;
                    color: #ffd700;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    text-shadow:
                        2px 2px 2px rgba(0, 0, 0, 0.3),
                        0 0 10px rgba(255, 215, 0, 0.5);
                }
                .booking-option.premium {
                    background: linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1));
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    position: relative;
                    text-align: center;
                }
                .corner-ribbon {
                    position: absolute;
                    top: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 170px;
                    padding: 5px;
                    background: linear-gradient(135deg, #0066cc, #004499);
                    color: #ffd700;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    text-align: center;
                    box-shadow:
                        0 3px 10px rgba(0, 0, 0, 0.4),
                        0 0 20px rgba(0, 102, 204, 0.4),
                        inset 0 -2px 5px rgba(0, 0, 0, 0.2);
                    border: 2px solid #ffd700;
                    border-left: 4px solid #ffd700;
                    border-right: 4px solid #ffd700;
                    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
                    font-size: 0.85rem;
                    line-height: 1.2;
                    z-index: 10;
                    transform-style: preserve-3d;
                    border-radius: 25px;
                }
                .corner-ribbon::before,
                .corner-ribbon::after {
                    content: '';
                    position: absolute;
                    background: #004499;
                    border: 1px solid #ffd700;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                    z-index: -1;
                }
                .corner-ribbon::before {
                    height: 15px;
                    width: 15px;
                    bottom: -8px;
                    left: -8px;
                    transform: skew(-45deg);
                }
                .corner-ribbon::after {
                    height: 15px;
                    width: 15px;
                    bottom: -8px;
                    right: -8px;
                    transform: skew(45deg);
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
                    text-align: center;
                    margin: 1rem auto;
                    max-width: 100%;
                    padding: 0 1.5rem;
                }
                .priority-text {
                    background: linear-gradient(45deg, #ff00ff, #00ffff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    font-weight: bold;
                    text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
                    animation: glowPulse 2s infinite;
                }
                @keyframes glowPulse {
                    0% {
                        filter: drop-shadow(0 0 5px rgba(255, 0, 255, 0.5));
                    }
                    50% {
                        filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.7));
                    }
                    100% {
                        filter: drop-shadow(0 0 5px rgba(255, 0, 255, 0.5));
                    }
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
                .disclaimer-link {
                    color: #00ffff;
                    text-decoration: none;
                    padding: 4px 12px;
                    border: 1px solid #00ffff;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                    display: inline-block;
                    margin: 8px 0;
                }
                .disclaimer-link:hover {
                    background: rgba(0, 255, 255, 0.1);
                    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
                    transform: translateY(-1px);
                }
                .value-benefits {
                    display: grid;
                    gap: 0.5rem;
                    margin: 1rem 0;
                    padding: 0.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 0.5rem;
                    text-align: center;
                }
                .benefit-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    padding: 0.6rem;
                    background: rgba(0, 255, 255, 0.05);
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                    text-align: center;
                }
                .benefit-item span {
                    text-align: center;
                    font-weight: 700;
                }
                .benefit-item:hover {
                    background: rgba(255, 0, 255, 0.1);
                    transform: translateX(5px);
                }
                .benefit-icon {
                    color: #00ffff;
                    font-size: 1.2rem;
                    filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.5));
                }
                .premium .option-description {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    margin: 1rem 0;
                    color: rgba(255, 255, 255, 0.9);
                    text-align: center;
                    padding: 0 1rem;
                }
                .unstick-prop {
                    font-size: 1.4rem;
                    margin: 1rem 0;
                    background: linear-gradient(45deg, #00ffff, #ff00ff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    text-align: center;
                    font-weight: 600;
                    animation: glow 2s ease-in-out infinite alternate;
                }

                @keyframes glow {
                    from {
                        text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
                    }
                    to {
                        text-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
                    }
                }
            </style>

            <div class="audit-container">
                <div class="header">
                    <h2 class="title">Buy My Time</h2>
                    <p class="unstick-prop">Let me help get you unstuck</p>
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
                        <div class="stat-label">Potential   </div>
                    </div>
                </div>

                <div class="features">
                    <div class="feature">
                        <div class="feature-title">Quick Audit</div>
                        <div class="feature-text">Get personalized insights on your social media, content, and business strategy</div>
                    </div>
                    <div class="feature">
                        <div class="feature-title">Risk Assessment</div>
                        <div class="feature-text">Understand AI's impact on your industry and how to stay ahead</div>
                    </div>
                    <div class="feature">
                        <div class="feature-title">Future Planning</div>
                        <div class="feature-text">Develop a roadmap for thriving in an AI-driven world</div>
                    </div>
                    <div class="feature">
                        <div class="feature-title">Problem Solving</div>
                        <div class="feature-text">Get expert guidance on any challenge you're facing</div>
                    </div>
                </div>

                <div class="booking-options">
                    <div class="booking-option">
                        <div class="option-title">Quick Clarity Call</div>
                        <div class="option-price">$10</div>
                        <div class="option-description">Turn "I'm stuck" into "I can do this"</div>
                        <a href="https://buy.stripe.com/8wM16I5jb76f1yg147" class="payment-button">Book Now</a>
                    </div>
                    <div class="booking-option">
                        <div class="value-star"></div>
                        <div class="option-title">30-60(ish) Minute Consultation</div>
                        <div class="option-price">$30</div>
                        <div class="option-description">Turn "What do I do?" into solving your <span class="priority-text">Top Priority</span></div>
                        <a href="https://buy.stripe.com/28o4iUfXP2PZ6SA148" class="payment-button">Book Now</a>
                    </div>
                    <div class="booking-option">
                        <div class="option-title">1-2 Hour Deep-Dive</div>
                        <div class="option-price">$60</div>
                        <div class="option-description">Turn your biggest challenges into breakthrough victories</div>
                        <a href="https://buy.stripe.com/dR64iU3b32PZ3Go6ot" class="payment-button">Book Deep-Dive</a>
                    </div>
                    <div class="booking-option premium">
                        <div class="corner-ribbon">MOST VALUE</div>
                        <div class="option-title">24/7 Retainer</div>
                        <div class="option-price">$500/mo</div>
                        <div class="option-description">
                            While others figure out prompts, you'll have direct access to an AI expert living in the future.
                        </div>
                        <div class="value-benefits">
                            <div class="benefit-item">
                                <i class="fas fa-bolt benefit-icon"></i>
                                <span>24/7 Priority Support</span>
                            </div>
                            <div class="benefit-item">
                                <i class="fas fa-phone-alt benefit-icon"></i>
                                <span>Direct Strategy Calls</span>
                            </div>
                            <div class="benefit-item">
                                <i class="fas fa-clock benefit-icon"></i>
                                <span>24hr Response Guarantee</span>
                            </div>
                            <div class="benefit-item">
                                <i class="fas fa-rocket benefit-icon"></i>
                                <span>Instant Tech Advantage</span>
                            </div>
                        </div>
                        <a href="https://buy.stripe.com/7sI6r2bHz2PZ1yg9AG" class="payment-button">Secure 24/7 Access</a>
                    </div>
                </div>

                <p class="footer-note">
                    After purchase you will be taken to a calendar page where you will be able to book a time slot. We will use Google Meets to connect. I'm looking forward to meeting with you!<br>
                    <a href="/legal" class="disclaimer-link">Read the Disclaimer</a><br>
                    Questions? Message me on social media <a href="https://solo.to/thecoffeejesus" class="social-handle">@thecoffeejesus</a>
                </p>
            </div>
        `;
    }
}

customElements.define('buy-my-time', BuyMyTime);