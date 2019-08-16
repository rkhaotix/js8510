import { carregarPagina } from "/scripts/navegacao/carregarPagina.js";

export function createFavoritoView(nome, endereco) {
    return {
        nome: nome,
        descricao: endereco || nome,
        onclick: function() {
            carregarPagina(endereco);
        }
    }
}