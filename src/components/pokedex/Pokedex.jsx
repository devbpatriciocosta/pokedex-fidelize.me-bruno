/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import PokemonCard from '../pokemonCard/PokemonCard'
import H2 from '../typograph/H2'

const PokedexContainer = styled.div`
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

export default function Pokedex({ ...props }) {
  const { pokemon, loading } = props
  return (
    <>
      <PokedexContainer>
        {loading ? (
          <H2>Iniciando... só um momento, Ash</H2>
        ) : (
          <div>
            {pokemon &&
              pokemon.map((pokemon, index) => {
                return (
                  <>
                    <PokemonCard key={index} pokemon={pokemon} />
                  </>
                )
              })}
          </div>
        )}
      </PokedexContainer>
    </>
  )
}
