export let aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"));

export function setAceitouSalvar(_aceitouSalvar) {
    if(typeof _aceitouSalvar === "boolean") {
        localStorage.setItem("aceitouSalvar", _aceitouSalvar);
        aceitouSalvar = _aceitouSalvar;
    }
}
