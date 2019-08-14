import {carregarPagina} from "./carregarPagina.js";

function mudaEnderecoResumido() {
    $inputEndereco.value = $iframeConteudo.contentWindow.location.hostname;
};

function mudaEnderecoCompleto() {
    $inputEndereco.value = $iframeConteudo.contentWindow.location.href;
};

function acessaEndereco(event) {
    if(event.key == "Enter" && $inputEndereco.value !== '') {
        carregarPagina($inputEndereco.value);
    }
}

$iframeConteudo.addEventListener("load", mudaEnderecoResumido);
$inputEndereco.addEventListener("focus", mudaEnderecoCompleto);
$inputEndereco.addEventListener("blur", mudaEnderecoResumido);
$inputEndereco.addEventListener("keyup", acessaEndereco);