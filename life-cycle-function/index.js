class customElementTest extends HTMLElement {
    constructor() {
        super();
        console.log('this is constructor');

        this.textContent = 'this is custom element test';
    }

    connectedCallback() {
        console.log('this is connectedCallback');
    }

    disconnectedCallback() {
        console.log('this is disconnectedCallback');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('this is attributeChangedCallback');
        console.log(attrName, 'attrName');
        console.log(oldVal, 'oldVal');
        console.log(newVal, 'newVal');
    }

    adoptedCallback() {
        console.log('this is adoptedCallback');
    }
}

customElements.define('custom-element', customElementTest);