import '../component/country-list';
import '../component/slide-box';
function DataSource (){

    const baseUrl = 'https://api.kawalcorona.com/';

    async function getGlobal() {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            if(data.error){
                showResponseMessage(data.message);
            }
            else {
                console.log(data);
                document.querySelector('.country-info');
                return data;
            }
        }
        catch {
            console.log(error);
        }
        /*const response = await fetch (baseUrl);
        const data = await response.json();
        console.log(data);
        document.getElementsByClassName('country-info');*/
    }
    getGlobal();
    async function getIndo(){
        try {
            const response = await fetch('https://api.kawalcorona.com/indonesia/');
            const data = await response.json();
            if(data.error){
                showResponseMessage(data.message);
            }
            else {
                console.log(data);
                document.querySelector('#indonesia');
            }
        }
        catch {
            console.log(error);
            
        }
    }
    getIndo();
    
    async function getConfirmed(){
        try {
            const response = await fetch('https://api.kawalcorona.com/positif/');
            const data = await response.json();
            if(data.error){
                showResponseMessage(data.message);
            }
            else {
                console.log(data);
                document.getElementsByClassName('#positif');
            }
        }
        catch {
            console.log(error);
            
        }
    }
    getConfirmed();
    async function getRecovered(){
        try {
            const response = await fetch('https://api.kawalcorona.com/sembuh/');
            const data = await response.json();
            if(data.error){
                showResponseMessage(data.message);
            }
            else {
                console.log(data);
                document.getElementsByClassName('#sembuh');
            }
        }
        catch {
            console.log(error);
            
        }
    }
    getRecovered();
    async function getDeaths(){
        try {
            const response = await fetch('https://api.kawalcorona.com/meninggal/');
            const data = await response.json();
            if(data.error){
                showResponseMessage(data.message);
            }
            else {
                console.log(data);
                document.getElementsByClassName('#meninggal');
            }
        }
        catch {
            console.log(error);
            
        }
    }
    getDeaths();
}

    /*fetch("https://api.kawalcorona.com/")
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            console.log(responseJson);
        })
        .catch(error => {
            console.log(error);
        })
}

/*class  DataSource {

    set baseUrl (baseUrl){
        this.baseUrl = baseUrl;
        baseUrl = `https://api.kawalcorona.com/`;
    }
    static getGlobal() {
        return fetch(`${this.baseUrl}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson) {
                console.log(responseJson);
                return Promise.resolve(responseJson);
            }
            else {
                return Promise.reject(`Data is not found`);
            }
        })
    }*/
    
    /*static searchCountry (keyword) {
        return fetch (`https://api.kawalcorona.com/=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson) {
                    console.log(responseJson);
                    return Promise.resolve(responseJson);
                }
                else {
                    return Promise.reject(` is not found`);
                }

            })
        
    }*/

//}
export default DataSource;
