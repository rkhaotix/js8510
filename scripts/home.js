import aceitouSalvar from "/scripts/salvarInfos.js";

if(aceitouSalvar === true) {
    let addr = localStorage.getItem("enderecoInicial");

    if(addr === null || addr === "") {
        addr = prompt("Endereço inicial?","");
    
        if(addr === null) {
            addr = '';
        }

        if(addr !== '' && !addr.startsWith( "http://") && !addr.startsWith("https://")) {
            addr = "http://" + addr;
        }
        
        localStorage.setItem("enderecoInicial", addr);
    }
    
    const enderecoInicial = addr;
    
    $inputEndereco.value = enderecoInicial;
    $iframeConteudo.src = enderecoInicial;
}



