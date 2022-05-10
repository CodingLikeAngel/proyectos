
class CoinObject extends HTMLElement {
    connectedCallback() {
       const div = document.createElement('div');
       this.append(div);
       div.innerText = 'text web components'
    }
}
customElements.define('coin-component', CoinObject);