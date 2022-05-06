import PrepareStyleLinks from "../js/PrepareStylesComponent";

class Meta extends HTMLElement {
    constructor() {
        const html = ``;
        super();
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        PrepareStyleLinks(shadow);
        shadow.appendChild(h1tag);
    }
}

export default Header;