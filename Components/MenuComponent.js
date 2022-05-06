class Menu extends HTMLElement {
    constructor() {
        super();
        const html=`<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <div class="navbar-nav">
                <a class="nav-link" aria-current="page" href="#cv" style="visibility:hidden">
                    <i class="fa fa-user-circle-o"></i> My CV
                </a>
                <a class="nav-link" href="#aparat"><i class="fa fa-film"></i>My Aparat Video</a>
                <a class="nav-link" href="#repo"><i class="fa fa-github"></i> GitHub Repositores</a>
                <a class="nav-link" href="#act"><i class="fa  fa-road"></i> My Activities</a>
                <a class="nav-link" href="#contact"><i class="fa fa-phone-square"></i> Contact</a>
                <a class="nav-link" href="#Certifications"><i class="fa fa-certificate"></i>
                    Certifications
                </a>
                <a class="nav-link" href="/persian.html"><i class="fa fa-flag"></i>
                    Persian Version
                </a>
            </div>
        </div>`;
        
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        shadow.appendChild(h1tag);
    }
}
export default Menu;