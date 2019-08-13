function mudaEnderecoResumido() {
    $inputEndereco.value = $iframeConteudo.contentWindow.location.hostname;
};

function mudaEnderecoCompleto() {
    $inputEndereco.value = $iframeConteudo.contentWindow.location.href;
};

$iframeConteudo.onload = mudaEnderecoResumido;
$inputEndereco.onfocus = mudaEnderecoCompleto;
$inputEndereco.onblur = mudaEnderecoResumido;