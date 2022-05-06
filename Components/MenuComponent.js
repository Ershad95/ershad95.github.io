import PrepareStylesComponent from '../js/PrepareStylesComponent.js';
class Menu extends HTMLElement {
    constructor() {
        super();
        const html=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <a class="nav-link" href="https://ershad95.github.io" ><i
                            class="fa fa-user-circle-o"></i>صفحه اصلی</a>

                    <a title="کانال آپارات ارشاد رئوفی" class="nav-link"
                        href="https://www.aparat.com/Ershad74/%D8%A7%D8%B1%D8%B4%D8%A7%D8%AF_%D8%B1%D8%A6%D9%88%D9%81%DB%8C"><i
                            class="fa fa-github"></i>لینک کانال آپارات</a>
                    <a title="کانال youtube ارشاد رئوفی" class="nav-link" href="https://ershad95.github.io/#repo"><i
                            class="fa fa-github"></i>لینک کانال Yotube</a>
                    <a title="درباره ارشاد رئوفی" class="nav-link" href="https://ershad95.github.io/#act"><i
                            class="fa  fa-road"></i>درباره
                        من</a>
                    <a title="ارتباط با ارشاد رئوفی" class="nav-link" href="https://ershad95.github.io/#contact"><i
                            class="fa fa-phone-square"></i>ارتباط با من</a>

                    </a>
                    <a title="رزومه ارشاد رئوفی" class="nav-link" href="cv.pdf"><i
                        class="fa fa-phone-square"></i>رزومه من</a>

                </a>
                </div>
            </div>
        </div>
    </nav>`;
        
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        PrepareStylesComponent(shadow);
        shadow.appendChild(h1tag);
    }
}
export default Menu;