export let paginaInicial = localStorage.getItem("enderecoInicial");

export function setPaginaInicial(_paginaInicial) {
    if(_paginaInicial === null) {
        _paginaInicial = '';
    }

    if(_paginaInicial !== '' && !_paginaInicial.startsWith( "http://") && !_paginaInicial.startsWith("https://")) {
        _paginaInicial = "http://" + _paginaInicial;
    }

    localStorage.setItem("enderecoInicial", _paginaInicial);
    paginaInicial = _paginaInicial;
}
