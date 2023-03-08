const painel = document.querySelector('.numbers');
let milissegundos = 0;
let segundos = 0;
let minutos = 0;
let timer;

function start() {
    timer = setInterval(() => {
        milissegundos++;
        if (milissegundos === 100) {
            milissegundos = 0;
            segundos++;
        }
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        const formatado = formatarTempo(minutos, segundos, milissegundos);
        painel.innerHTML = formatado;
    }, 10);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    milissegundos = 0;
    segundos = 0;
    minutos = 0;
    painel.textContent = '00:00:00';
}

function formatarTempo(min, sec, mil) {
    const minutos = min.toString().padStart(2, '0');
    const segundos = sec.toString().padStart(2, '0');
    const milissegundos = mil.toString().padStart(2, '0');
    return `${minutos}:${segundos}:${milissegundos}`;
}