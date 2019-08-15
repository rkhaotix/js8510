export function CakeEnderecoInvalidoError(url) {
    const object = {
        message: "URL inválida: " + url,
        __proto__: CakeEnderecoInvalidoError.prototype
    }

    return object;
}