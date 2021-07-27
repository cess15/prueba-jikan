export const getAnimes = async (search = '', page = 1) => {
    let animes = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&page=${page}&limit=6`)    
    return animes.json()
}

export const getAnime = async (id) => {
    let anime = await fetch(`https://api.jikan.moe/v3/anime/${id}`)
    return anime.json()
}

export const getGenres = async (genre_id) => {
    let genres = await fetch(`https://api.jikan.moe/v3/genre/anime/${genre_id}`)
    return genres.json()
}
