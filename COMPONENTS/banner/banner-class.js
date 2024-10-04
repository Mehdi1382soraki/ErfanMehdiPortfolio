const template = document.createElement('template')

template.innerHTML = `  <link rel="stylesheet" href="COMPONENTS/banner/banner-style.css">
                        <div class="">
                            <img src="">
                            <h3></h3>
                            <p></p>
                        </div>`

export class banner extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    } connectedCallback () {
        this.shadowRoot.querySelector('div').className = this.className
        this.shadowRoot.querySelector('img').src = this.getAttribute('image-address')
        this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('header')
        this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('paragraph')
    }
}

window.customElements.define('site-banner', banner)