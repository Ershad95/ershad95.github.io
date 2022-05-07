function PrepareStyleLinks(shadow){

        const fonticon = document.createElement('link');
        fonticon.setAttribute('href','https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css');
        fonticon.setAttribute('rel','stylesheet');
       
        const bootstrapCSS = document.createElement('link');
        bootstrapCSS.setAttribute('href','https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
        bootstrapCSS.setAttribute('rel','stylesheet');
        
        const styleCSS = document.createElement('link');
        styleCSS.setAttribute('href','css/style.css');
        styleCSS.setAttribute('rel','stylesheet');

        const PrepareStyle = document.createElement('link');
        PrepareStyle.setAttribute('href','css/persianStyle.css');
        PrepareStyle.setAttribute('rel','stylesheet');

        
        shadow.appendChild(styleCSS);
        shadow.appendChild(bootstrapCSS);
        // shadow.appendChild(PrepareStyle);
        shadow.appendChild(fonticon);
        return shadow;
}
export default PrepareStyleLinks;