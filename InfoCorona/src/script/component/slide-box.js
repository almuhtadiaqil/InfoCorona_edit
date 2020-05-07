class SlideBox extends HTMLElement {

    connectedCallback(){
        this.render();
    }


    render() {
        this.innerHTML =`
        <div class="bd-example">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselEcampleCaptions" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active" id="positif">${this.name}</div>
                    <div class="carousel-item" id="sembuh">Sembuh</div>
                    <div class="carousel-item" id="meninggal">Meninggal</div>
                    <div class="carousel-item" id="indonesia">${this.name}</div></div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
                        <span class="sr-only">Previous</span> 
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span> 
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>`;
    }
    renderError(message) {
        this.innerHTML = `
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
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("slide-box", SlideBox)