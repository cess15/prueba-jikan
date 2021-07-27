import { getAnimes, getAnime, getGenres } from "./endpoints.js";
import { drawCard } from "./card-animes.js";

let search = document.getElementById('search')

search.onkeyup = async function() {

    if(search.value.length >= 4) {
        const animes = await getAnimes(search.value)
        
        let id = animes.results[0].mal_id

        let anime = await getAnime(id)

        let genres = anime.genres.slice(0, 2).map( element => element.mal_id);
        
        Promise.all([getGenres(genres[0]), getGenres(genres[1])]).then( suggestedAnime => {

            let animeRule = (animes, gendre)  => animes.concat(gendre.anime.slice(0, 3));

            let arrayOfAnime = suggestedAnime.reduce(animeRule, [])
    
            let completeAnimes = Promise.all(arrayOfAnime.map( anime => getAnime(anime.mal_id) ))
    
            //limpiar contenedor

            // completeAnimes.forEach( animePromise => setTimeout( async () => { 
            //     drawOneCard( await animePromise ) 
            // }, 0 ) )

        })
        
        drawCard(animes.results)

    }

}

