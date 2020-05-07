class SlideItem extends HTMLElement {
    
    set slide(slide) {
        this._slide = slide;
        this.render();
    }

    render() {
        
   
    }
}

customElements.define("slide-item", SlideItem);