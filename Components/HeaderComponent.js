import PrepareStylesComponent from '../js/PrepareStylesComponent.js';
class Header extends HTMLElement {
    constructor() {
        const html = `<div class="row">
        <div class="col-md-12">
            <h1>کلیپ های آموزشی ارشاد رئوفی</h1>
        </div>
    </div>
    <hr>`;
        super();
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        PrepareStylesComponent(shadow);
        shadow.appendChild(h1tag);
    }
}

export default Header;