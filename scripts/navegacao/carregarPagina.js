import {formatarUrl} from "/scripts/utils.js";
import { CakeEnderecoInvalidoError } from "/scripts/erros/CakeEnderecoInvalidoError.js";

export function carregarPagina(pagina) {
    try
    {
        pagina = formatarUrl(pagina);
        $inputEndereco.value = pagina;
        $iframeConteudo.src = pagina;    
    }
    catch(e)
    {
        if(e instanceof CakeEnderecoInvalidoError) {
            alert("busca " + e.endereco)
        }
        else {
            throw e;
        }
    }
}
