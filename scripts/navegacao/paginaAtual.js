import { paginaInicial } from "/scripts/storage/paginaInicial.js";
import { carregarPagina } from "/scripts/navegacao/carregarPagina.js";

const paginaAtual = sessionStorage.getItem("paginaAtual");
const pagina = paginaAtual !== null ? paginaAtual : paginaInicial;

carregarPagina(pagina);

$iframeConteudo.addEventListener("load", function(){
    sessionStorage.setItem("paginaAtual", $iframeConteudo.contentWindow.location.href);
});