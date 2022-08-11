export const getPokemons = async (limit = 100, offset = 0) => {
    
        let url = `https:pokeapi.co/api/v2/pokemon?limit=${limit}&offset={offset}`
        const response = await fetch(url)
        return await response.json()
    
}

export const getPokemonsData = async (url) => {


        const response = await fetch(url)
        return await response.json()
}