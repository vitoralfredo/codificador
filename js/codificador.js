var codificar = document.querySelector("#input");

codificar.addEventListener("input", function(event){
    event.preventDefault();

    var cripitografado = this.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").
    replace(/o/g, "ober").replace(/u/g, "ufat");

    var botaoCripitografar = document.querySelector("#cripitografar");
    botaoCripitografar.addEventListener("click", function(){

        var mensagem = (document.querySelector("#mensagem"));
        mensagem.innerHTML = "Cripitografado:";

        var imprimir = (document.querySelector("#imprimir"));
        imprimir.innerHTML = cripitografado;
        
    });
});

