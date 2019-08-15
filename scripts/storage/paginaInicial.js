import {formatarUrl} from "/scripts/utils.js";

export let paginaInicial = localStorage.getItem("enderecoInicial");

export function setPaginaInicial(_paginaInicial) {
    try
    {
        _paginaInicial = formatarUrl(_paginaInicial);
        localStorage.setItem("enderecoInicial", _paginaInicial);
        paginaInicial = _paginaInicial;
    }
    catch(e)
    {
        console.warn(e);
    }

}
