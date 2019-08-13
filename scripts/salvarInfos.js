import * as moduloAceitouSalvar from "/scripts/storage/aceitouSalvar.js";

if( moduloAceitouSalvar.aceitouSalvar === null) {
    const _aceitouSalvar = confirm("Aceita salvar suas informações?");
    moduloAceitouSalvar.setAceitouSalvar(_aceitouSalvar);
}