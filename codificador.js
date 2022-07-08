var codificar = document.querySelector("#teste");

codificar.addEventListener("input", function(){
    var cripitografado = this.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").
    replace(/o/g, "ober").replace(/u/g, "ufat");

    var botaoCripitografar = document.querySelector("#cripitografar");
    botaoCripitografar.addEventListener("click", function(){

        var mensagem = (document.querySelector("#mensagem"));
        mensagem.innerHTML = "Cripitografado:";
        mensagem.classList.add("style");

        var imprimir = (document.querySelector("#imprimir"));
        imprimir.innerHTML = cripitografado;
    });
   
});

var decodificar = document.querySelector("#teste");

decodificar.addEventListener("input", function(){
    var descripitografado = this.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").
    replace(/ober/g, "o").replace(/ufat/g, "u");

    var botaoDescripitografar = document.querySelector("#descripitografar");
    botaoDescripitografar.addEventListener("click", function(){

        var mensagem = (document.querySelector("#mensagem"));
        mensagem.innerHTML = "Descripitografado:";
        mensagem.classList.add("style");
        
        var imprimir = (document.querySelector("#imprimir"));
        imprimir.innerHTML = descripitografado;
    });
   
});

