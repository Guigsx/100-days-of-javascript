function insert(num) {
    var numero = document.querySelector('.painel').innerHTML;
    document.querySelector('.painel').innerHTML = numero + num;
}
function clean() {
    document.querySelector('.painel').innerHTML = "";
}
function back() {
    var resultado = document.querySelector('.painel').innerHTML;
    document.getElemequerySelectorntById('.painel').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
    var resultado = document.querySelector('.painel').innerHTML;
    if (resultado) {
        document.querySelector('.painel').innerHTML = eval(resultado);
    }
    else {
        document.querySelector('.painel').innerHTML = "Nada..."
    }
}