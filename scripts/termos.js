if(localStorage.getItem("aceitouTermos") === null)
{
    const nome = prompt("Whazzaaa?");

    //String multilinha
    //Interpolação
    //Template string
    const termos = `
    Olá ${nome}!
    
    Antes de usar o Cake, precisamos que
    você aceite nossos termos de uso:
    
    • Você aceita que este software foi
    feito por pessoas que participaram
    do curso de Java.
    
    • Você aceita que o código dessas
    pessoas pode acessar tudo o que
    você digitar aqui.
    
    • Você aceita que tudo aqui esta
    em desenvolvimento e por isso não
    recomendamos que você troque de navegador agora
    
    Aceita os termos de uso do navegador?`;
    
    const aceita = confirm(termos);
    
    if(!aceita) {
        alert("I'm so sorry, Bill! :(");
        window.close();
    }
    else {
        localStorage.setItem("aceitouTermos", "true");
    }
}


