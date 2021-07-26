import printTable from "./template-animes.js";
let cardAnimes = document.getElementById('card-animes');

export function drawCard(data) {
    cardAnimes.innerHTML='';

    data.map( anime => {
       cardAnimes.insertAdjacentHTML('beforeend', printTable(anime))
    })

}