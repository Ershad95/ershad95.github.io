class Contact extends HTMLElement {
    constructor() {
        const html = `<div class="card" id=contact>
        <div class="card-header">
            <h4>Contact</h4>
        </div>
        <div class="card-body">

            <div class="row">

                <div class="col-md-2">
                    <i class="fa fa-map fa-2x"></i>
                    <h5 class="card-title">Address</h5>
                    <p class="card-text">Iran,Tehran</p>
                </div>

                <div class="col-md-2">
                    <i class="fa fa-2x fa-linkedin"></i>
                    <h5 class="card-title">Linkedin : </h5>
                    <p class="card-text">
                        <a title="Ershad Raoufi linkedin" target="_blank" href="https://ir.linkedin.com/in/ershad74">Ershad74R</a>
                    </p>
                </div>

                <div class="col-md-2">
                    <i class="fa fa-instagram fa-2x"></i>
                    <h5 class="card-title">Instagram : </h5>
                    <p class="card-text">
                        <a title="Ershad Raoufi Instagram" target="_blank" href="https://instagram/Ershad74R">Ershad74R</a>
                    </p>
                </div>

                <div class="col-md-2">
                    <i class="fa fa-github fa-2x"></i>
                    <h5 class="card-title">Github : </h5>
                    <p class="card-text">
                        <a title="Ershad Raoufi GitHub" target="_blank"
                            href="https://github.com/Ershad95">Ershad95</a>
                    </p>
                </div>

                <div class="col-md-2">
                    <i class="fa  fa-send fa-2x"></i>
                    <h5 class="card-title">Email : </h5>
                    <p class="card-text">
                        <a target="_blank" href="mailto:ErshadRaoufi@gmail.com">ErshadRaoufi@gmail.com</a>
                    </p>
                </div>

                <div class="col-md-2">
                    <i class="fa fa-film fa-2x"></i>
                    <h5 class="card-title">Aparat : </h5>
                    <p class="card-text">
                        <a target="_blank" title='Aparat' href="https://www.aparat.com/Ershad74">Ershad74</a>
                    </p>
                </div>
            </div>

        </div>
        <div class="card-footer ">
            Update a few minutes
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
export default Contact;

