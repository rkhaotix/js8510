export function formatarUrl(url) {
    let urlFmt = url;

    if(typeof url !== "string") {
        const erro = Error(`
        Endereço inválido:
        ${url}
        Tipo inválido:
        ${typeof url}`

        );
    }

    if(urlFmt ===  null) {
        urlFmt = '';
    }

    if(urlFmt !== '' && urlFmt.match(/^(.)+(\:)(\/)(\/)/) === null) {
        urlFmt = "http://" + urlFmt;
    }

    return urlFmt;
}