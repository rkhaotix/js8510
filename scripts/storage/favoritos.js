export const listaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

export function salvarFavorito(favorito) {
        listaFavoritos.push(favorito);
        localStorage.setItem("favoritos", JSON.stringify(listaFavoritos));
}