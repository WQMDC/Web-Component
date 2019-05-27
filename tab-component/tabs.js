class Tabs extends HTMLElement {
    constructor() {
        super();

        const style = document.createElement('style');
        style.textContent = `ul>li {
            display: inline-block;
            margin-right: 10px;
            font-size: 18px;
            color: rgb(167, 164, 164);
            cursor: pointer;
            list-style: none;
        }

        ul>li:last-child {
            margin-right: 0;
        }

        ul>li:hover {
            color: #218ee7;
            text-decoration: underline;
        }`

        const ul = document.createElement('ul');
        let menu = this.getAttribute('menu') || console.error('please set your menu name');

        if(typeof menu === 'string') {
            menu = menu.split(',');
        }

        menu.forEach(element => {
           const li = document.createElement('li');
           li.innerText = element;
           
           ul.appendChild(li);
        });

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(ul);
    }
}

customElements.define('tabs-component', Tabs);
