import styled from 'styled-components'
import H2 from '../typograph/H2'
import PokemonCard from '../pokemonCard/PokemonCard'

import { useContext } from 'react'
import FavoriteContext from '../../context/favorites'

const MyFav = styled.div`
  margin-top: 30px;
  font-size: 18px;
`

const FavoritesPokemonContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-column-gap: 45px;
  grid-row-gap: 43px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 857px) {
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 689px) {
    grid-row-gap: 10px;
    grid-column-gap: 5px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 630px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export default function MyFavorites() {
  const { favoritePokemons } = useContext(FavoriteContext)
  return (
    <>
      <MyFav>
        <H2>Favoritos</H2>
      </MyFav>
      <FavoritesPokemonContainer>
        {favoritePokemons &&
          favoritePokemons.map((pokemon, index) => {
            return (
              <>
                <PokemonCard key={index} pokemon={pokemon} />
              </>
            )
          })}
      </FavoritesPokemonContainer>
    </>
  )
}
