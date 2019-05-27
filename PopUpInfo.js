class PopUpInfo extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({mode: 'open'});

        var wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');
        var icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabIndex', 0);
        var info = document.createElement('span');
        info.setAttribute('class', 'info');

        var text = this.getAttribute('text');
        info.textContent = text;
        info.style.color = 'blue';

        var imgUrl;
        if(this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img')
        } else {
            imgUrl = '';
        }

        var img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img)

        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

customElements.define('popup-info', PopUpInfo);