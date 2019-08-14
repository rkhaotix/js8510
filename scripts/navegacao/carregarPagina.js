import {formatarUrl} from "/scripts/utils.js";

export function carregarPagina(pagina) {
    pagina = formatarUrl(pagina);
    $inputEndereco.value = pagina;
    $iframeConteudo.src = pagina;
}
