class Skill extends HTMLElement {

    constructor() {
        const html = ` <div class="card" id="cv">
        <div class="card-header">
            <h4>My CV</h4>
        </div>
        <div class="card-body">
            <h5 title="Skills Of ErshadRaoufi">Skills</h5>
            <div class="row">
                <div class="col-md-2">
                    <i class="fa fa-5x fa-laptop"></i>
                </div>
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-4">
                            <!--<p>.NET Programmer</p>-->
                            <p>Entity Framework / Microsoft SQL Server</p>
                            <p>FCM / GCM / SignalR / JWT</p>
                            <p>ASP.net MVC / ASP.net Core Programmer</p>
                            <p>Create Web Service with WebApi 2 / Swagger</p>

                        </div>
                        <div class="col-md-4">
                            <p> Create NopCommerce Plugin and Programmer</p>
                            <p>Contact REST Web Services</p>
                            <p>Contact GraphQL Web Services</p>
                            <p>Create web plugins for chrome browser</p>

                        </div>
                        <div class="col-md-4">
                            <p>HTML/CSS/JS</p>
                            <p>Jquery</p>
                            <p>JSON/XML/QML</p>
                            <a href="/cv.pdf" class="btn btn-primary">Download CV <i
                                    class="fa fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="row">
                <div class="col-md-2">
                    <i class="fa fa-5x fa-university"></i>
                </div>
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Educational and academic background</h5>
                            <p>
                                M.Sc. in Computer Engineering Software
                            </p>
                            <p>
                                B.Sc. in Computer Engineering Software
                            </p>
                        </div>
                        <div class="col-md-6">
                            <h5>
                                Research Background
                            </h5>
                            <p>
                                Persian Handwriting Detection Using OCR, KNN Algorithms (MSc Thesis)
                            </p>
                            <p>
                                Creating and developing android phone taxi app with FCM (undergraduate final
                                project)
                            </p>
                            <p>
                                Create Android App and Search Site in Scientific Articles with Elsevier Web
                                Service
                            </p>
                            <p>
                                Creating and developing an operating system emulator program with QT (Linux
                                Desktop)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">
            Update a few minutes
        </div>
    </div>`;
        super();
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        const h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        
        const fonticon = document.createElement('link');
        fonticon.setAttribute('href','http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css');
        fonticon.setAttribute('rel','stylesheet');
       
        const bootstrapCSS = document.createElement('link');
        bootstrapCSS.setAttribute('href','https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
        bootstrapCSS.setAttribute('rel','stylesheet');
        
        const styleCSS = document.createElement('link');
        styleCSS.setAttribute('href','css/style.css');
        styleCSS.setAttribute('rel','stylesheet');

        shadow.appendChild(bootstrapCSS);
        shadow.appendChild(fonticon);
        shadow.appendChild(styleCSS);
        shadow.appendChild(h1tag);
    }
}

export default Skill;
