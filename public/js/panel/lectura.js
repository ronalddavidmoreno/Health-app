'use strict'

window.onload = function () {
    function leerHtml(id,nameModule){
        var modulo = document.getElementById(id);
        var stringModulo = modulo.outerHTML;
        localStorage.setItem(nameModule,stringModulo);
    }
    console.log(localStorage);
    leerHtml('barra-lateral','barra-lateral');
    leerHtml('panel-cabecera','cabecera');
    leerHtml('pie-panel','pie-panel');
}