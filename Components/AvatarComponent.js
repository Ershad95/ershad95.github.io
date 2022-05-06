class Avatar extends HTMLElement {
    constructor() {
        const html = `<div class="custom_avatar">
        <a href="#">
            <img alt="ErshadRaoufi_ارشاد رئوفی" src="profile.jpg" class="myAvatar" />
        </a></div>`;
        super();
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        shadow.appendChild(h1tag);
    }
}

export default Avatar;