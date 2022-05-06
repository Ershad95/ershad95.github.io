class Certification extends HTMLElement {
    constructor() {
        const html = ` <div class="card" id="Certifications">
        <div class="card-header">
            <h4>Licenses & Certifications</h4>
        </div>
        <div class="card-body center">
            <div class="row">
                <div class="col-md-4">
                    <figure>
                        <!-- <i class="fa fa-certificate fa-2x certificate_badge"></i> -->
                        <img class="certificate" src="certificates/certificate_blazor.jpg" loading="lazy"
                            alt="daneshjooyar Blazor Certificate_مدرک Blazor دانشجویار" />
                        <figcaption>
                            <a title="دانشجویار-daneshjooyar" target="_blank"
                                href="https://daneshjooyar.com/cf/FmOBksPYHL/">Daneshjooyar Certification For
                                Asp.net Core/Blazor</a>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-4">
                    <figure>
                        <!-- <i class="fa fa-certificate fa-2x certificate_badge"></i> -->
                        <img class="certificate" src="certificates/certificate_css_html.jpg" loading="lazy"
                            alt="daneshjooyar CSS/HTML Certificate_مدرک CSS/HTML دانشجویار" />
                        <figcaption>
                            <a title="دانشجویار-daneshjooyar" target="_blank"
                                href="https://www.daneshjooyar.com/cf/yD4LjY5BFg/">Daneshjooyar Certification
                                For CSS/HTML</a>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-4">
                    <figure>
                        <!-- <i class="fa fa-certificate fa-2x certificate_badge"></i> -->
                        <img class="certificate" src="certificates/ctcore.png" loading="lazy"
                            alt="Udemy Certification Asp.net MVC Core MasterClass" />
                        <figcaption>
                            <a title="Udemy" target="_blank" href="https://www.udemy.com/">Udemy Certification
                                Asp.net MVC Core MasterClass</a>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div class="card-footer ">
                Update a few minutes
            </div>
        </div>
    </div>`;
        super();
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        shadow.appendChild(h1tag);
    }
}
export default Certification;