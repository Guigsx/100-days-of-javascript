const answer = document.querySelector('.card_answer')
const input = document.querySelector('input')

function gerar() {
    new QRCode(answer, {
        text: `${input.value}`,
        width: 256,
        height: 256
    });
}