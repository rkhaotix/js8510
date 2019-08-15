export function CakeEnderecoInvalidoError(url) {
    const object = Error();
    object.message = "URL inválida: " + url;
    object.endereco = url;
    Object.setPrototypeOf(object, CakeEnderecoInvalidoError.prototype);
    return object;
}