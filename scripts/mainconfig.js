import { paginaInicial, setPaginaInicial } from "/scripts/storage/paginaInicial.js"
import { aceitouSalvar, setAceitouSalvar } from "/scripts/storage/aceitouSalvar.js"
import { formatarUrl } from "./utils.js";
import { CakeEnderecoInvalidoError } from "./erros/CakeEnderecoInvalidoError.js";

$inputPaginaInicial.value = paginaInicial;
$inputPermissao.checked = aceitouSalvar;

$btnSalvar.onclick = function(){

    try
    {
        let endereco = formatarUrl($inputPaginaInicial.value);
        $inputPaginaInicial.value = endereco;
        setPaginaInicial(endereco);
        setAceitouSalvar($inputPermissao.checked);    
    }
    catch(e)
    {
        if(e instanceof CakeEnderecoInvalidoError){
            alert(e.message);
            console.warn(e);
            $inputPaginaInicial.value = paginaInicial;
            $inputPaginaInicial.focus();
        }
        // instanceof caminha pelos __proto__ do objeto para checar o tipo (constructor == Error)
        else if(e instanceof Error) {
            console.error(e);
        }
        else {
            throw e;
        }

    }
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