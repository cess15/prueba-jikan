import { getAnimes } from "./endpoints.js";
import { drawCard } from "./card-animes.js";

let search = document.getElementById('search')

search.onkeyup = async function() {

    if(search.value != '') {
        const animes = await getAnimes(search.value)
        let data = await animes.json()
        drawCard(data.results)
    }

}

