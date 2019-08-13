/* IIFE : Immediatelly Invoked Function Expression */

let aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"));

if( aceitouSalvar === null) {
    aceitouSalvar = confirm("Aceita salvar suas informações?");
    localStorage.setItem("aceitouSalvar", aceitouSalvar);
}

export default aceitouSalvar;



