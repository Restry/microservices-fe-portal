function LoadCss(cssUrl) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssUrl;
    document.getElementsByTagName("body")[0].appendChild(link);
}


var targetUrl;

if(window.location.host.startsWith('scf')) {
    LoadCss('/scf.css')
}else {
    LoadCss('/index.css')
}
