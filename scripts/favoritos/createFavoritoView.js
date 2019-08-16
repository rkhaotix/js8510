import { carregarPagina } from "/scripts/navegacao/carregarPagina.js";

export class FavoritoView {
    constructor(nome, endereco) {
        this.nome = nome || endereco;
        this.descricao = endereco;
        this._endereco = endereco;
        this.onclick = this.onclick.bind(this);
    }

    onclick() {
        carregarPagina(this._endereco);
    }
}


export function createFavoritoView(nome, endereco) {
    return {
        nome: nome || endereco,
        descricao: endereco,
        onclick: function() {
            carregarPagina(endereco);
        }
    }
}