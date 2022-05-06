class Typestring extends HTMLElement {
    constructor() {
        const html = `<div id="typed-strings">
        <p>Hi!,Iam Ershad Raoufi</p>
        <p>Iam Developer! <i style="color:palegreen" class="fa fa-file-code-o"></i></p>
        <p>Xamarin.Forms Lover <i style="color:crimson" class="fa fa-heart"></i></p>
        <p>Backend .NetCore Developer <i style="color:greenyellow" class="fa fa-laptop"></i></p></div>`;
        super();
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        shadow.appendChild(h1tag);
    }
}
export default Typestring;
