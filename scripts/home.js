
import { aceitouSalvar } from "/scripts/storage/aceitouSalvar.js";
import * as moduloPagina from "/scripts/storage/paginaInicial.js";

if(aceitouSalvar === true) {
    let addr = moduloPagina.paginaInicial;

    if(addr === null || addr === "") {
        addr = prompt("Endereço inicial?","");
        moduloPagina.setPaginaInicial(addr);
    }
    
    $inputEndereco.value = moduloPagina.paginaInicial;
    $iframeConteudo.src = moduloPagina.paginaInicial;
}



