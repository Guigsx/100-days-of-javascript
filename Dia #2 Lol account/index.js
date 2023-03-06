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
            let encryptedSummonerId = data.id;

            fetch(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`)
                .then(response => response.json())
                .then(data => {

                    fetch(`https://ddragon.leagueoflegends.com/cdn/11.5.1/img/profileicon/${profileIconId}.png`)
                        .then(response => response.blob())
                        .then(blob => {
                            let soloDuoInfo = data.filter(queue => queue.queueType === "RANKED_SOLO_5x5")[0];
                            let wins = soloDuoInfo.wins;
                            let losses = soloDuoInfo.losses;
                            let wr = (wins * 100) / (wins + losses)
                            console.log(wr)
                            const url = URL.createObjectURL(blob);
                            resultado.classList.remove('esconder');
                            container.classList.add('esconder');
                            resultado.innerHTML =
                                `
                                <img src="${url}" alt="Ícone do jogador" style="height: 80px; width: 80px;">
                                <nome>${name}</nome>
                                <level>${level}</level>
                                <wins>${wins}V</wins>
                                <losses>${losses}L</losses>
                                <winrate>Winrate ${wr.toFixed(0)}%</winrate>
                                `;
                        });
                });
        })
        .catch(error => console.error(error));
}