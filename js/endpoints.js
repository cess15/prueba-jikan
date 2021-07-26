export const getAnimes = async (search = '', page = 1) => {
    let animes = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&page=${page}&limit=6`)    
    return animes
}