export const searchPokemon = async (pokemon, res) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    return await response.json()
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

export const getPokemons = async (limit = 151, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    return await response.json()
  } catch (err) {
    console.log('error: ', err)
  }
}

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (err) {
    console.log('error: ', err)
  }
}
