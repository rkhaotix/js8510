const listaFavoritosPrivada = JSON.parse(localStorage.getItem("favoritos")) || [];

export const listaFavoritos = [...listaFavoritosPrivada]; //A sintaxe [...array] cria um novo array explodindo ele e inserindo os elementos no novo

export function salvarFavorito(favorito) {
        listaFavoritosPrivada.push(favorito);
        localStorage.setItem("favoritos", JSON.stringify(listaFavoritosPrivada));
}