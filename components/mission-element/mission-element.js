class MissionElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                .mission-container {
                    padding: 0 1rem;
                    position: relative;
                    overflow: hidden;
                    display: grid;
                    place-items: center;
                    gap: 1rem;
                }

                .mission-text {
                    font-size: 1.8rem;
                    font-weight: 700;
                    text-align: center;
                    color: white;
                    max-width: 800px;
                    line-height: 1.2;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeIn 1s ease forwards;
                }

                .highlight {
                    color: #6dd5ff;
                }

                .mission-icons {
                    display: flex;
                    gap: 2rem;
                    margin-top: 0.5rem;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeIn 1s ease forwards 0.3s;
                }

                .icon-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.25rem;
                }

                .icon {
                    width: 48px;
                    height: 48px;
                    display: grid;
                    place-items: center;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }

                .icon:hover {
                    transform: translateY(-3px);
                    background: rgba(255, 255, 255, 0.15);
                }

                .icon-label {
                    font-size: 1rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.8);
                }

                @keyframes fadeIn {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 768px) {
                    .mission-text {
                        font-size: 1.4rem;
                    }
                    .mission-icons {
                        gap: 2rem;
                    }
                    .icon {
                        width: 40px;
                        height: 40px;
                    }
                }
            </style>

            <div class="mission-container">
                <div class="mission-text">
                    Through <span class="highlight">coffee</span>, we connect.
                    Through <span class="highlight">community</span>, we grow.
                    Through <span class="highlight">creation</span>, we transform.
                </div>
                <div class="mission-icons">
                    <div class="icon-item">
                        <div class="icon">☕</div>
                        <span class="icon-label">Connect</span>
                    </div>
                    <div class="icon-item">
                        <div class="icon">🤝</div>
                        <span class="icon-label">Grow</span>
                    </div>
                    <div class="icon-item">
                        <div class="icon">🚀</div>
                        <span class="icon-label">Transform</span>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('mission-element', MissionElement);