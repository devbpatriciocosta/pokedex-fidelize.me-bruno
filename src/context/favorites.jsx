import React from 'react'

const FavoriteContext = React.createContext({
  favoritePokemons: [],
  // eslint-disable-next-line no-unused-vars
  updateFavoritePokemons: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext
