/* eslint-disable no-undef */
import styled from 'styled-components'

import NavBar from '../src/components/navBar/NavBar'
import Body from '../src/components/layout/body/Body'
import Container from '../src/components/layout/container/Container'
import H1 from '../src/components/typograph/H1'
import H2 from '../src/components/typograph/H2'
import SearchBarInput from '../src/components/searchBarInput/SearchBarInput'
import Pokedex from '../src/components/pokedex/Pokedex'

import { useEffect, useState } from 'react'
import { getPokemons, getPokemonData } from './api/pokedex/pokemonApi'

const SecondaryContainer = styled.div`
  width: auto;
  display: flex;
  margin: 0vh 2vh 2vh;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 850px) {
    width: auto;
  }
  @media (max-width: 630px) {
    width: 400px;
  }
  @media (max-width: 510px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`

const MyFavorites = styled.div`
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

const AllPokemons = styled.div`
  margin-top: 30px;
  font-size: 18px;
`

function HomePage() {
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetchAllPokemons()
    console.log('carregou')
  }, [])

  const fetchAllPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const result = await Promise.all(promises)
      setPokemon(result)
      setLoading(false)
    } catch (err) {
      console.log('fetchPokemons error', err)
    }
  }

  return (
    <>
      <NavBar />
      <Body>
        <Container>
          <H1>
            Hey, Ash! <br></br>Qual pokémon você deseja pesquisar hoje?
          </H1>
          <SearchBarInput />
          <SecondaryContainer>
            <MyFavorites>
              <H2>Favoritos</H2>
            </MyFavorites>
            <FavoritesPokemonContainer></FavoritesPokemonContainer>
            <AllPokemons>
              <H2>Pokedéx</H2>
            </AllPokemons>
            <Pokedex loading={loading} pokemon={pokemon} />
          </SecondaryContainer>
        </Container>
      </Body>
    </>
  )
}

export default HomePage
