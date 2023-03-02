const painel = document.querySelector('.painel');

function insert(num) {
  painel.innerHTML += num;
}

function clean() {
  painel.innerHTML = '';
}

function back() {
  painel.innerHTML = painel.innerHTML.slice(0, -1);
}

function calcular() {
  try {
    const resultado = eval(painel.innerHTML);
    painel.innerHTML = Number.isInteger(resultado) ? resultado : resultado.toFixed(2);
  } catch (e) {
    painel.innerHTML = 'Erro';
  }
}
