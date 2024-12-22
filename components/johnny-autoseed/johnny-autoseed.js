class JohnnyAutoseed extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const response = await fetch('/components/johnny-autoseed/johnny-autoseed.html');
        const html = await response.text();
        this.innerHTML = html;
    }
}

customElements.define('johnny-autoseed', JohnnyAutoseed);
