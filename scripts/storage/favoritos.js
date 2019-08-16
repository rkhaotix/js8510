const listaFavoritosPrivada = JSON.parse(localStorage.getItem("favoritos")) || [];

export const listaFavoritos = [...listaFavoritosPrivada]; //A sintaxe [...array] cria um novo array explodindo ele e inserindo os elementos no novo

export function salvarFavorito(favorito) {
        listaFavoritosPrivada.push(favorito);
        localStorage.setItem("favoritos", JSON.stringify(listaFavoritosPrivada));
}

export function removerFavorito(endereco) {
        let fav = listaFavoritosPrivada.find(f => {
                return f.endereco === endereco
        });
      
        const posFavorito = listaFavoritosPrivada.indexOf(fav);
        listaFavoritosPrivada.splice(posFavorito, 1);
        localStorage.setItem("favoritos", JSON.stringify(listaFavoritosPrivada));
        return fav;
}

export function possuiFavorito(endereco) {
        return JSON.stringify(listaFavoritosPrivada).includes(endereco);
}