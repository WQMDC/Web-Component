class Tabs extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const tabsTemplate = document.getElementById('tabs-template').content;

        shadowRoot.appendChild(tabsTemplate.cloneNode(true));
    }
}

class Tab extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const tabTemplate = document.getElementById('tab-template').content;

        shadowRoot.appendChild(tabTemplate.cloneNode(true));
    }
}

customElements.define('tabs-component', Tabs);
customElements.define('tab-component', Tab);