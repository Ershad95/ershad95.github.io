import PrepareStylesComponent from '../js/PrepareStylesComponent.js';
class Aparat extends HTMLElement {
    constructor() {
        const html = `<div class="row">
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/GnzRw/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/U0ALi/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>

        </div>
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">

            <iframe src="https://www.aparat.com/video/video/embed/videohash/pkf6H/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
    </div>
    <div class="row">
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/1s3VM/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/g9LGl/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>

        </div>
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/0BlHy/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
    </div>
    <div class="row">
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/nIua0/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/P2Qxz/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>

        </div>
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/xtKJu/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
    </div>
    <div class="row">
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/7atT9/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/P1cq5/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
        <div title="کلیپ های آموزشی ارشاد رئوفی" class="col-md-4">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/iC8Ta/vt/frame?recom=none"
                allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
    </div>`;
        super();
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        PrepareStylesComponent(shadow);
        shadow.appendChild(h1tag);
    }
}

export default Aparat;