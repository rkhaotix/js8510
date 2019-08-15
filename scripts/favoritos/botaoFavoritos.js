import * as favoritos from "/scripts/storage/favoritos.js";
import { aceitouSalvar } from "/scripts/storage/aceitouSalvar.js";


for(const fav of favoritos.listaFavoritos) {
    $Cake.addFavorite(fav);
}

$btnFavoritos.addEventListener('click', function(){ 

    if(!aceitouSalvar) {
        return;
    }

    const endereco = $iframeConteudo.contentWindow.location.href;
    const nomeFavorito = prompt("Nome do favorito?", $inputEndereco.value) || endereco;

    const favorito = {
        nome: nomeFavorito,
        descricao: endereco
    };


    favoritos.salvarFavorito(favorito);
    $Cake.addFavorite(favorito);
});