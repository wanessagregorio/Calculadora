var operacao = null;
var resultado = 0;
function btn(tecla) {
    var visor = document.getElementById("visor").value
    visor = visor + "" + tecla

    document.getElementById("visor").value = parseInt(visor);

}


function btnop(valor) {
    var visor = document.getElementById("visor");
    document.getElementById("firstvalue").value = visor.value;
    document.getElementById("op").value = valor;

    document.getElementById("visor").value = "";
}

function btnc(valor) {
    var visor = document.getElementById("visor");
    var firstvalue = document.getElementById("firstvalue");
    var op = document.getElementById("op");
    visor.value = 0;
    firstvalue.value = 0;
    op.value = 0;
    operacao = null;
}


function btnig() {
    var visor = document.getElementById("visor");
    var firstvalue = document.getElementById("firstvalue");
    var op = document.getElementById("op");
    var result = 0;
    switch (op.value) {
        case "/":
            result = parseInt(firstvalue.value) / parseInt(visor.value)
            break;
        case "*":
            result = parseInt(firstvalue.value) * parseInt(visor.value)
            break;
        case "+":
            result = parseInt(firstvalue.value) + parseInt(visor.value)
            break;
        case "-":
            result = parseInt(firstvalue.value) - parseInt(visor.value)
            break;
        default:
            break;
    }

    visor.value = result;
    firstvalue.value = result;
    op.value = "";
}