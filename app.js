import cipher from './cipher.js';
var capturando ="";
var botaoCifrar= document.getElementById("encode");
var botaoDecifrar=document.getElementById("decode");

botaoCifrar.addEventListener.("onclick", function(event) {
    event.preventDefault();
    let valor = document.getElementById("valor").value;
    document.getElementById(valorDigitado).innerHTML = cipher.encode(offsetInput,valor);
})

botaoDecifrar.addEventListener.apply("onclick", function (event){
    event.preventDefault();
    let valor2 = document.getElementById("valor2").value;
    document.getElementById(valorDigitado2).innerHTML = cipher.decode(offsetInput,valor2);

})

