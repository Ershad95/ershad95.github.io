class Aparat extends HTMLElement {
    constructor() {
        const html = `<div class="card" id="aparat" title="Repositories Of ErshadRaoufi">
        <div class="card-header">
            <h4>Ershad's Aparat Video</h4>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <div title="کلیپ های آموزشی ارشاد رئوفی">
                        <iframe
                            src="https://www.aparat.com/video/video/embed/videohash/pkf6H/vt/frame?recom=none"
                            allowFullScreen="true" webkitallowfullscreen="true"
                            mozallowfullscreen="true"></iframe>
                    </div>
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <ul>
                        <li>
                            <h4>Lazy Loading</h4>
                            <h6>What is Lazy and Lazy Loading?</h6>
                            <h6>Introduce Lazy Type in c#</h6>
                            <h6>when you should use lazy loading in c#?</h6>
                            <h6>How to manage Memory with lazy Type in c#?</h6>
                            <a class="seeMoreLink" title="ErshadRaoufi_Aparat"
                                href="https://www.aparat.com/v/pkf6H">see video on aparat</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <ul>
                        <li>
                            <h4>GitHub</h4>
                            <h6>What is GitHub Pages?</h6>
                            <h6>Introduce Pages</h6>
                            <h6>when you should use Github?</h6>
                            <h6>How to manage Page in Github?</h6>
                            <a class="seeMoreLink" title="ErshadRaoufi_Aparat"
                                href="https://www.aparat.com/v/P1cq5">see video on aparat</a>

                        </li>
                    </ul>
                </div>

                <div class="col-md-4">
                    <div title="کلیپ های آموزشی ارشاد رئوفی">
                        <iframe
                            src="https://www.aparat.com/video/video/embed/videohash/P1cq5/vt/frame?recom=none"
                            allowFullScreen="true" webkitallowfullscreen="true"
                            mozallowfullscreen="true"></iframe>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-md-3">
                    <div title="کلیپ های آموزشی ارشاد رئوفی">
                        <iframe
                            src="https://www.aparat.com/video/video/embed/videohash/U0ALi/vt/frame?recom=none"
                            allowFullScreen="true" webkitallowfullscreen="true"
                            mozallowfullscreen="true"></iframe>
                    </div>
                </div>
                <div class="col-md-3">
                    <div title="کلیپ های آموزشی ارشاد رئوفی">
                        <iframe
                            src="https://www.aparat.com/video/video/embed/videohash/1s3VM/vt/frame?recom=none"
                            allowFullScreen="true" webkitallowfullscreen="true"
                            mozallowfullscreen="true"></iframe>
                    </div>
                </div>
                <div class="col-md-3">
                    <div title="کلیپ های آموزشی ارشاد رئوفی">
                        <iframe
                            src="https://www.aparat.com/video/video/embed/videohash/GnzRw/vt/frame?recom=none"
                            allowFullScreen="true" webkitallowfullscreen="true"
                            mozallowfullscreen="true"></iframe>
                    </div>
                </div>
                <div class="col-md-3">
                    <div title="کلیپ های آموزشی ارشاد رئوفی">
                        <iframe
                            src="https://www.aparat.com/video/video/embed/videohash/xtKJu/vt/frame?recom=none"
                            allowFullScreen="true" webkitallowfullscreen="true"
                            mozallowfullscreen="true"></iframe>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="seeMore">
                    <a class="seeMoreLink" href="https://ershad95.github.io/aparat.html">
                        See More Video
                    </a>
                </div>
                <div class="seeMore">
                    <a class="seeMoreLink" href="https://aparat.com/Ershad74">
                        Aparat Chanel
                    </a>
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

export default Aparat;