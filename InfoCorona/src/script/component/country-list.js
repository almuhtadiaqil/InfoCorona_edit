class CountryList extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    set countrys(countrys){
        this._countrys = countrys;
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
            <h2>${this.Country_Region}</h2>
            <p>Positif : ${this.attributes.Confirmed}</p>
            <p>Recovered : ${this.attributes.Recovered}</p>
            <p>Deaths : ${this.attributes.Deaths}</p>
        </div>
        `;


        /*this.shadowDOM.innerHTML = "";
        this._countrys.forEach(country => {
            const countryItemElement = document.createElement("country-item");
            countryItemElement.country = country;
            this.shadowDOM.appendChild(countryItemElement);
        })*/
    }

    /*renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
        }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }*/


}

customElements.define("country-list", CountryList);