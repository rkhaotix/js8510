
$btnVoltar.addEventListener("click", function() {
    $iframeConteudo.contentWindow.history.back();
});

$btnAvancar.addEventListener("click", function() {
    $iframeConteudo.contentWindow.history.forward();
});