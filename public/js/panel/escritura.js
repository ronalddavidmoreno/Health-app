'use strict'

window.onload = function () {

    function importHtml(selector,contenido,indiceArrayHtml,posicion){
        const cuerpo = document.getElementsByTagName(selector);
        let contentCabecera = localStorage[contenido];
        cuerpo[indiceArrayHtml].insertAdjacentHTML(posicion,contentCabecera);
    }
        var contentHoja = document.getElementsByClassName('content');
        let barraLateral = localStorage['barra-lateral'];
        contentHoja[0].insertAdjacentHTML('afterbegin',barraLateral);
    //importHtmlId('content','barra-lateral',0,'afterbegin');
    importHtml('body','cabecera',0,'afterbegin');
    importHtml('body','pie-panel',0,'beforeend');

    // var cuerpo = document.getElementsByTagName('body');
    // var contentCabecera = localStorage['cabecera'];
    // cuerpo[0].insertAdjacentHTML('afterbegin',contentCabecera);
}
//console.log();