
class CoinObject extends HTMLElement {

    connectedCallback() {
        const mainContainer = document.createElement('div');
        this.append(mainContainer);
        mainContainer.innerText = 'text web components';
      //  let oReq = new XMLHttpRequest();
      //  oReq.addEventListener("load", this.reqListener());
        let apikey = {
            key: 'cbdc79b2-b954-40e4-b12b-e6f366d589ea'
        };
        //  oReq.open("GET", "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&CMC_PRO_API_KEY=" +  apikey.key);
        // oReq.open("GET", "https://pro-api.coinmarketcap.com/v1/key/info?CMC_PRO_API_KEY=" +  apikey.key);
         fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key).then(response => response.json())
        .then(data => console.log(data));
        //oReq.send();
    }

}
customElements.define('coin-component', CoinObject);