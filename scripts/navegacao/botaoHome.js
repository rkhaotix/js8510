import { paginaInicial } from "/scripts/storage/paginaInicial.js";
import { carregarPagina } from "/scripts/navegacao/carregarPagina.js";

$btnHome.addEventListener("click", function() {
    carregarPagina(paginaInicial);
});