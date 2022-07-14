var decodificar = document.querySelector("#input");

decodificar.addEventListener("input", function(){
    var descripitografado = this.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").
    replace(/ober/g, "o").replace(/ufat/g, "u");

    var botaoDescripitografar = document.querySelector("#descripitografar");
    botaoDescripitografar.addEventListener("click", function(){

        var mensagem = (document.querySelector("#mensagem"));
        mensagem.innerHTML = "Descripitografado:";
        
        var imprimir = (document.querySelector("#imprimir"));
        imprimir.innerHTML = descripitografado;

    });

});