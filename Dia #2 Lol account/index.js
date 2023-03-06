const resultado = document.querySelector('.resultado')
const container = document.querySelector('.container')

resultado.classList.add('esconder')

const API_KEY = 'RGAPI-05b4f606-bfae-444e-a23d-6e2adeeadb9a';

function procurar() {
    let SUMMONER_NAME = document.querySelector('.nome').value;
    fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SUMMONER_NAME}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            let name = data.name;
            let level = data.summonerLevel;
            let profileIconId = data.profileIconId;

            fetch(`https://ddragon.leagueoflegends.com/cdn/11.5.1/img/profileicon/${profileIconId}.png`)
                .then(response => response.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    resultado.classList.remove('esconder');
                    container.classList.add('esconder');
                    resultado.innerHTML =
                        `
                        <img src="${url}" alt="Ícone do jogador" style="height: 80px; width: 80px;">
                        <nome>${name}</nome>
                        <level>${level}</level>
                        `;
                });
        })
        .catch(error => console.error(error));
}