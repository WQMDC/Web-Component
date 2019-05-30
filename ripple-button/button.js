class FancyButton extends HTMLButtonElement {

    constructor() {
        super();
        this.addEventListener('mousedown', e => this.drawRipple(e));
        
        // 定义涟漪按钮的初始样式
        this.style.position = 'relative';
        this.style.backgroundColor = 'transparent';
        this.style.overflow = 'hidden';
        this.style.outline = 'none';
        this.style.borderRadius = '5px';
    }

    drawRipple(e) {
        const ev = e || window.event;
        const x = ev.offsetX;
        const y = ev.offsetY;
        const buttonWidth = this.offsetWidth;
        const buttonHeight = this.offsetHeight;
        const _self = this;

        let div = document.createElement('div');
        this.appendChild(div);

         // 涟漪扩散速度
        const speed = 2;

        // 定义涟漪的样式
        div.style.position = 'absolute'
        div.style.backgroundColor = 'rgba(221,221,221, .3)';
        div.style.borderRadius = '50%';

        // 计算涟漪的初始位置
        const radiusX = buttonWidth - x > x ? buttonWidth - x : x;
        const radiusY = buttonHeight - y > y ? buttonHeight - y : y;
        const rippleSize = Math.sqrt(Math.pow(radiusX, 2) + Math.pow(radiusY,2));
        let timer = setInterval(() => {
            div.style.width = div.offsetWidth + speed + 'px';
            div.style.height = div.offsetHeight + speed + 'px';
            div.style.left = x - div.offsetWidth / 2 + 'px';
            div.style.top = y - div.offsetHeight / 2 + 'px';
            div.style.opacity = div.offsetWidth / rippleSize / 2;
            if(div.offsetWidth >= rippleSize*2 && div.offsetHeight >= rippleSize*2){
                clearInterval(timer);
                div.remove();
            }
        }, 10);
    }
}

customElements.define('fancy-button', FancyButton, {extends: 'button'});