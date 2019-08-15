import { CakeEnderecoInvalidoError } from "./erros/CakeEnderecoInvalidoError.js";

export function formatarUrl(url) {
    let urlFmt = url;

    if(url === null || url === "" || url === "blank") {
        return "blank";
    }

    if(typeof url !== "string") {
        const erro = Error(`
        Endereço inválido:
        ${url}
        Tipo inválido:
        ${typeof url}`

        );
    }

    const regexp = /^[\S]+[\.\:][\S]{2,}(\/[^\/\s]+)*$/

    if(!regexp.test(urlFmt)) {
        throw CakeEnderecoInvalidoError(urlFmt);
    }

    if(urlFmt !== '' && urlFmt.match(/^(.)+(\:)(\/)(\/)/) === null) {
        urlFmt = "http://" + urlFmt;
    }

    return urlFmt;
}