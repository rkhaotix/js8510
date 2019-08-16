import * as favoritos from "/scripts/storage/favoritos.js";
import { aceitouSalvar } from "/scripts/storage/aceitouSalvar.js";
import { FavoritoView, createFavoritoView } from "./createFavoritoView.js";

for(const fav of favoritos.listaFavoritos) {
    const favParaExibir = new FavoritoView (fav.nome, fav.endereco);
    $Cake.addFavorite(favParaExibir);
}

$btnFavoritos.addEventListener('click', function(){ 

    if(!aceitouSalvar) {
        return;
    }

    const endereco = $iframeConteudo.contentWindow.location.href;
    const nomeFavorito = prompt("Nome do favorito?", $inputEndereco.value) || endereco;

    const favParaSalvar = {
        nome: nomeFavorito,
        endereco: endereco
    };

    const favorito = new FavoritoView(nomeFavorito, endereco);
    favoritos.salvarFavorito(favParaSalvar);
    $Cake.addFavorite(favorito);
});