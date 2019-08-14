import { paginaInicial, setPaginaInicial } from "/scripts/storage/paginaInicial.js"
import { aceitouSalvar, setAceitouSalvar } from "/scripts/storage/aceitouSalvar.js"
import { formatarUrl } from "./utils.js";

$inputPaginaInicial.value = paginaInicial;
$inputPermissao.checked = aceitouSalvar;

$btnSalvar.onclick = function(){
    let endereco = formatarUrl($inputPaginaInicial.value);
    $inputPaginaInicial.value = endereco;
    setPaginaInicial(endereco);
    setAceitouSalvar($inputPermissao.checked);
};

$btnLimpar.addEventListener("click", function(){
    const chavesPermanentes = [
        "aceitouSalvar", "aceitouTermos"
    ];

    const listaChaves = Object.keys(localStorage);

    for(let chave of listaChaves) {
        if(!chavesPermanentes.includes(chave)) {
            localStorage.removeItem(chave);
        }
    }
    
    const chavesPermSession = [
        "paginaAtual"
    ];

    const listaChavesPerms = Object.keys(sessionStorage);

    for(let chave of listaChavesPerms) {
        if(!chavesPermSession.includes(chave)) {
            sessionStorage.removeItem(chave);
        }
    }
    
    $inputPaginaInicial.value = '';
    window.location.reload();
});