class CountryItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }
    set country(country) {
        this._country = country;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .country-item {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            
            .country-info {
                padding: 24px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                position: relative;
                top: 10px;
                background-color: black;
                width: 100%;
                margin: 20px
            }
            
            .country-info > h2 {
                font-weight: lighter;
                color: white;
            }
            .country-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
                color: white;
            }
        </style>
        <div class="country-info">
            <h2>${this._country.attributes.Country_Region}</h2>
            <p>Positif : ${this._country.attributes.Confirmed}</p>
            <p>Recovered : ${this._country.attributes.Recovered}</p>
            <p>Deaths : ${this._country.attributes.Deaths}</p>
        </div>
        `;
    }
}

customElements.define("country-item", CountryItem)