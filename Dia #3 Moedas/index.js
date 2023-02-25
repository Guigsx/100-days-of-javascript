const dolar = document.querySelector('.dolar');
const euro = document.querySelector('.euro');
const bitcoin = document.querySelector('.bitcoin');

fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    .then(res => res.json())
    .then(response => {
        //dolar
        let valor_dolar = parseFloat(response.USDBRL.ask)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //euro
        let valor_euro = parseFloat(response.EURBRL.ask)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //btc
        let valor_bitcoin = parseFloat(response.BTCBRL.ask)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        dolar.innerHTML = `
            <h1>Dólar</h1>
            <p>${valor_dolar}</p>
        `;
        euro.innerHTML = `
            <h1>Euro</h1>
            <p>${valor_euro}</p>
        `;
        bitcoin.innerHTML = `
            <h1>Bitcoin</h1>
            <p>${valor_bitcoin}</p>
        `;
    }).catch(error => {
        console.log(error);
    });