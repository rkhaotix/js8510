import { paginaInicial, setPaginaInicial } from "/scripts/storage/paginaInicial.js"
import { aceitouSalvar, setAceitouSalvar } from "/scripts/storage/aceitouSalvar.js"

$inputPaginaInicial.value = paginaInicial;
$inputPermissao.checked = aceitouSalvar;

$btnSalvar.onclick = function(){
    setPaginaInicial($inputPaginaInicial.value);
    setAceitouSalvar($inputPermissao.checked);
};