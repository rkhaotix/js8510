import { carregarPagina } from "/scripts/navegacao/carregarPagina.js";

export class FavoritoView {
    constructor(nome, endereco) {
        this.nome = nome;
        this.descricao = endereco || nome;
        this._endereco = endereco;
        this.onclick = this.onclick.bind(this);
    }

    onclick() {
        carregarPagina(this._endereco);
    }
}


export function createFavoritoView(nome, endereco) {
    return {
        nome: nome,
        descricao: endereco || nome,
        onclick: function() {
            carregarPagina(endereco);
        }
    }
}