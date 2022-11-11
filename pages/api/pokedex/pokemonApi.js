export const searchPokemon = async (pokemon, res) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    return await response.json()
  } catch (err) {
    return res.status(500).send(err.message)
  }
}
