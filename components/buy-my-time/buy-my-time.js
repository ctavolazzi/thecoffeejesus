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
                    margin: 0 auto;
                    width: 100%;
                    max-width: 1400px;
                }
                .audit-container {
                    background: linear-gradient(135deg, rgba(42, 42, 42, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%);
                    border-radius: 1rem;
                    padding: 0.5rem 1rem 2rem;
                    color: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    width: 95%;
                    margin: 0 auto;
                }
                .header {
                    text-align: center;
                    margin-bottom: 1.5rem;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .title {
                    font-size: clamp(2rem, 5vw, 2.5rem);
                    font-weight: bold;
                    margin: 0;
                    background: linear-gradient(45deg, #ff00ff, #00ffff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                .subtitle {
                    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
                    color: #cccccc;
                    margin: 0 auto 1rem;
                    max-width: 600px;
                    padding: 0 1rem;
                    line-height: 1.5;
                }
                .stats {
                    display: flex;
                    justify-content: center;
                    gap: clamp(2rem, 4vw, 3rem);
                    margin: 2rem 0;
                    flex-wrap: wrap;
                    padding: 0 1rem;
                }
                .stat {
                    text-align: center;
                    min-width: 120px;
                    flex: 0 1 auto;
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
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-areas:
                        "audit risk future"
                        "problem problem problem";
                    gap: 1.5rem;
                    margin: 2.5rem auto;
                    max-width: 1200px;
                    padding: 0 1rem;
                }
                .feature {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    width: 100%;
                }
                .feature:nth-child(1) { grid-area: audit; }
                .feature:nth-child(2) { grid-area: risk; }
                .feature:nth-child(3) { grid-area: future; }
                .feature:nth-child(4) {
                    grid-area: problem;
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 2rem;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .feature:nth-child(4) .feature-title {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    background: linear-gradient(45deg, #00ffff, #ff00ff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    text-shadow: none;
                }
                .feature:nth-child(4) .feature-text {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    color: #ffffff;
                    max-width: 600px;
                    margin: 0 auto;
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
                .top-options {
                    display: flex;
                    justify-content: space-between;
                    gap: 1.5rem;
                    margin: 2rem auto;
                    max-width: 1200px;
                    padding: 0 1rem;
                }
                .top-options > div {
                    flex: 1;
                    width: 100%;
                }
                .bottom-option {
                    max-width: 800px;
                    margin: 2rem auto;
                    padding: 0 1rem;
                }
                .booking-option {
                    background: rgba(255, 255, 255, 0.02);
                    padding: 1.5rem 1.25rem;
                    border-radius: 1.25rem;
                    text-align: center;
                    box-shadow:
                        0 8px 32px rgba(0, 0, 0, 0.2),
                        0 2px 8px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    justify-content: space-between;
                    height: 100%;
                    backdrop-filter: blur(10px);
                }
                .option-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    flex-grow: 1;
                }
                .option-header {
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .option-title {
                    font-size: clamp(1.5rem, 4vw, 1.75rem);
                    font-weight: 800;
                    color: #40ffff;
                    margin: 0;
                    text-shadow:
                        0 0 20px rgba(64, 255, 255, 0.4),
                        0 0 40px rgba(64, 255, 255, 0.2);
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                }
                .booking-option .option-price {
                    font-size: clamp(2.25rem, 5vw, 2.75rem);
                    font-weight: 800;
                    color: #ff40ff;
                    margin: 0.75rem 0 0;
                    text-shadow:
                        0 0 30px rgba(255, 64, 255, 0.5),
                        0 0 60px rgba(255, 64, 255, 0.3);
                    line-height: 1;
                    letter-spacing: -0.03em;
                }
                .option-description {
                    text-align: center;
                    margin: 0;
                    padding: 0;
                    font-size: 1.15rem;
                    line-height: 1.4;
                    color: rgba(255, 255, 255, 0.95);
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .option-description p {
                    margin: 0;
                    padding: 0;
                }
                .option-footer {
                    margin: 0;
                }
                .value-star {
                    background: linear-gradient(135deg, #0066cc, #004499);
                    color: #ffd700;
                    padding: 6px 16px;
                    border-radius: 20px;
                    border: 2px solid #ffd700;
                    box-shadow:
                        0 4px 15px rgba(0, 102, 204, 0.3),
                        0 0 20px rgba(255, 215, 0, 0.1);
                    font-weight: bold;
                    font-size: 0.75rem;
                    letter-spacing: 1px;
                    position: absolute;
                    top: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    white-space: nowrap;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .value-star:after {
                    content: "";
                    position: absolute;
                    inset: -2px;
                    border-radius: 30px;
                    padding: 2px;
                    background: linear-gradient(135deg, rgba(255, 215, 0, 0.5), rgba(255, 215, 0, 0.2));
                    -webkit-mask:
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    mask:
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }
                .booking-option.premium {
                    background: linear-gradient(
                        135deg,
                        rgba(255, 0, 255, 0.15),
                        rgba(0, 255, 255, 0.15)
                    );
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    padding: 2rem 2rem 2rem;
                    box-shadow:
                        0 12px 40px rgba(0, 0, 0, 0.3),
                        0 4px 12px rgba(0, 0, 0, 0.1);
                }
                .premium .option-title {
                    margin-bottom: 0.5rem;
                }
                .premium .option-price {
                    margin-bottom: 1rem;
                }
                .premium .option-description {
                    font-size: 1.25rem;
                    line-height: 1.4;
                    margin: 0 0 1rem 0;
                    color: rgba(255, 255, 255, 0.95);
                    text-align: center;
                    padding: 0;
                }
                .corner-ribbon {
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: auto;
                    padding: 0.35rem 1rem;
                    background: linear-gradient(135deg, #0077ff, #0044cc);
                    color: #ffd700;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    text-align: center;
                    box-shadow:
                        0 2px 8px rgba(0, 0, 0, 0.2),
                        0 0 15px rgba(0, 119, 255, 0.3);
                    border: 1px solid #ffd700;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                    font-size: 0.65rem;
                    line-height: 1;
                    z-index: 10;
                    border-radius: 1rem;
                }
                .corner-ribbon::before,
                .corner-ribbon::after {
                    display: none;
                }
                .option-description {
                    text-align: center;
                    margin: 1rem auto;
                    padding: 0 0.5rem;
                    font-size: clamp(0.9rem, 2.5vw, 1rem);
                    word-break: break-word;
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
                    margin: 2rem auto 0;
                    font-size: 0.9rem;
                    max-width: 600px;
                    padding: 0 1rem;
                    line-height: 1.6;
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
                    font-size: 1.35rem;
                    line-height: 1.6;
                    margin: 0;
                    color: rgba(255, 255, 255, 0.95);
                    text-align: center;
                    padding: 0;
                }
                .unstick-prop {
                    font-size: 1.4rem;
                    margin: 0.5rem 0;
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

                @media (max-width: 768px) {
                    .audit-container {
                        padding: 1.5rem 1rem;
                    }

                    .booking-option {
                        padding: 1.5rem 1rem;
                    }

                    .features {
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    }

                    .stats {
                        gap: 1.5rem;
                    }

                    .top-options {
                        flex-direction: column;
                        align-items: center;
                        gap: 1.5rem;
                    }
                    .top-options > div {
                        max-width: 400px;
                        width: 100%;
                    }
                    /* Set specific order for mobile */
                    .top-options > div:nth-child(1) { order: 1; } /* $10 first */
                    .top-options > div:nth-child(2) { order: 2; } /* $30 second */
                    .top-options > div:nth-child(3) { order: 3; } /* $60 third */
                    .bottom-option { order: 4; } /* Retainer last */
                }

                @media (max-width: 480px) {
                    .audit-container {
                        width: 98%;
                        padding: 1rem;
                    }

                    .stats {
                        gap: 1rem;
                    }

                    .stat {
                        min-width: 100px;
                    }

                    .features {
                        gap: 1rem;
                    }

                    .booking-options {
                        gap: 1.5rem;
                    }
                }

                @media (min-width: 1200px) {
                    .booking-options {
                        grid-template-columns: repeat(4, minmax(240px, 1fr));
                    }
                }

                @media (min-width: 768px) and (max-width: 1199px) {
                    .booking-options {
                        grid-template-columns: repeat(2, minmax(240px, 1fr));
                    }
                }

                @media (max-width: 767px) {
                    .booking-options {
                        grid-template-columns: minmax(240px, 1fr);
                    }
                    .booking-option {
                        max-width: 350px;
                    }
                }

                @media (max-width: 1024px) {
                    .features {
                        grid-template-columns: repeat(2, 1fr);
                        grid-template-areas:
                            "audit risk"
                            "future future"
                            "problem problem";
                        gap: 1.5rem;
                    }
                    .feature:nth-child(3) {
                        max-width: 600px;
                        margin: 0 auto;
                    }
                }

                @media (max-width: 768px) {
                    .features {
                        grid-template-columns: 1fr;
                        grid-template-areas:
                            "audit"
                            "risk"
                            "future"
                            "problem";
                        gap: 1rem;
                    }
                    .feature,
                    .feature:nth-child(3),
                    .feature:nth-child(4) {
                        max-width: 400px;
                        margin: 0 auto;
                    }
                }

                @media (max-width: 1024px) {
                    .booking-options {
                        flex-direction: column;
                        align-items: center;
                        gap: 1.5rem;
                    }
                    .booking-option,
                    .booking-option:nth-child(-n+3) {
                        max-width: 500px;
                        flex-basis: 100%;
                    }
                    /* On mobile, show Most Popular first */
                    .booking-option:nth-child(2) {
                        order: -1;
                    }
                }

                @media (max-width: 768px) {
                    .booking-options {
                        gap: 1.25rem;
                    }
                    .booking-option,
                    .booking-option:nth-child(4) {
                        max-width: 400px;
                    }
                }

                @media (max-width: 480px) {
                    .booking-options {
                        gap: 1rem;
                        padding: 0 0.5rem;
                    }
                    .booking-option {
                        max-width: 100%;
                    }
                }

                .book-button {
                    width: 100%;
                    display: inline-block;
                    padding: 0.9rem 2rem;
                    background: linear-gradient(135deg, #0088ff, #0055cc);
                    color: white;
                    text-decoration: none;
                    border-radius: 0.75rem;
                    font-size: 1.15rem;
                    font-weight: 700;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                    box-shadow:
                        0 4px 12px rgba(0, 0, 0, 0.15),
                        0 2px 4px rgba(0, 0, 0, 0.1),
                        inset 0 1px rgba(255, 255, 255, 0.1);
                    letter-spacing: 0.02em;
                    margin-top: 0.5rem;
                }

                .book-button:hover {
                    transform: translateY(-2px);
                    background: linear-gradient(135deg, #0099ff, #0066dd);
                    box-shadow:
                        0 6px 16px rgba(0, 136, 255, 0.25),
                        0 4px 8px rgba(0, 0, 0, 0.1),
                        inset 0 1px rgba(255, 255, 255, 0.2);
                }

                .book-button:active {
                    transform: translateY(0);
                    box-shadow:
                        0 2px 8px rgba(0, 0, 0, 0.1),
                        inset 0 1px 2px rgba(0, 0, 0, 0.1);
                }

                .booking-option p {
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                    font-size: 1.1rem;
                    line-height: 1.4;
                    padding: 0 0.5rem;
                }

                .premium .book-button {
                    margin-top: 1rem;
                    background: linear-gradient(135deg, #0099ff, #0066dd);
                    box-shadow:
                        0 6px 20px rgba(0, 136, 255, 0.3),
                        0 3px 8px rgba(0, 0, 0, 0.2),
                        inset 0 1px rgba(255, 255, 255, 0.2);
                    font-size: 1.25rem;
                    padding: 1.25rem 2rem;
                }

                .limited-time {
                    margin: 1rem 0;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 0.75rem;
                    border: 1px solid rgba(255, 215, 0, 0.3);
                }

                .limited-time p {
                    color: #ffd700;
                    font-size: 0.9rem;
                    margin: 0;
                    font-weight: bold;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                .limited-time p span:first-child {
                    font-size: 1rem;
                    letter-spacing: 0.5px;
                }

                .limited-time p span:nth-child(2) {
                    font-size: 0.8rem;
                    opacity: 0.9;
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
                        <div class="feature-title">Transform Your Challenges</div>
                        <div class="feature-text">
                            Turn confusion into clarity and obstacles into opportunities with expert guidance that gets results.
                        </div>
                    </div>
                </div>

                <div class="top-options">
                    <div class="booking-option">
                        <div class="option-content">
                            <div class="option-header">
                                <h3 class="option-title">Quick Clarity Call</h3>
                                <p class="option-price">$10</p>
                            </div>
                            <div class="option-description">
                                <p>Turn "I'm stuck" into "I can do this"</p>
                            </div>
                            <div class="option-footer">
                                <a href="https://buy.stripe.com/8wM16I5jb76f1yg147" class="book-button">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="booking-option">
                        <div class="option-content">
                            <div class="option-header">
                                <h3 class="option-title">30-60(ish) Minute Consultation</h3>
                                <p class="option-price">$30</p>
                            </div>
                            <div class="option-description">
                                <p>Turn "What do I do?" into solving your Top Priority</p>
                            </div>
                            <div class="option-footer">
                                <a href="https://buy.stripe.com/28o4iUfXP2PZ6SA148" class="book-button">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="booking-option">
                        <div class="option-content">
                            <div class="option-header">
                                <h3 class="option-title">1-2 Hour Deep-Dive</h3>
                                <p class="option-price">$60</p>
                            </div>
                            <div class="option-description">
                                <p>Turn your biggest challenges into breakthrough victories</p>
                            </div>
                            <div class="option-footer">
                                <a href="https://buy.stripe.com/dR64iU3b32PZ3Go6ot" class="book-button">Book Deep-Dive</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-option">
                    <div class="booking-option premium">
                        <div class="corner-ribbon">BEST VALUE</div>
                        <h3 class="option-title">24/7 Retainer</h3>
                        <p class="option-price">$500</p>
                        <p>Turn confusion into clarity and obstacles into opportunities with expert guidance that gets results</p>
                        <div class="limited-time">
                            <p style="color: #ffd700; font-size: 0.9rem; margin: 0.5rem 0; font-weight: bold; display: flex; flex-direction: column; gap: 0.5rem;">
                                <span>🔥 Limited Time & Spots 🔥</span>
                                <span style="font-size: 0.6rem;">Price increases with each new signup</span>
                                <span>Once spots are filled, waitlist only</span>
                            </p>
                        </div>
                        <a href="https://buy.stripe.com/7sI6r2bHz2PZ1yg9AG" class="book-button">Purchase 24/7 Access</a>
                        <p style="font-size: 0.8rem; margin-top: 1rem; color: rgba(255, 255, 255, 0.8);">After purchase, you'll be directed to an intake form to set up your account and access.</p>
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