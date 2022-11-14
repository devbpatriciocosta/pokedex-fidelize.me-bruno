/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { getPokemons, getPokemonData } from './api/pokedex/pokemonApi'
import { FavoriteProvider } from '../src/context/favorites'

import styled from 'styled-components'

import Body from '../src/components/layout/body/Body'
import NavBar from '../src/components/navBar/NavBar'
import Container from '../src/components/layout/container/Container'
import SearchBarInput from '../src/components/searchBarInput/SearchBarInput'
import MyFavorites from '../src/components/favorites/MyFavorites'
import Pokedex from '../src/components/pokedex/Pokedex'
import IconImages from '../src/components/iconImages/IconImages'

import H1 from '../src/components/typograph/H1'
import H2 from '../src/components/typograph/H2'

const TitlePokedex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 130px 60px 0;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    margin: 0 0 40px;
  }
`

const SecondaryContainer = styled.div`
  width: auto;
  display: flex;
  margin: 0vh 2vh 2vh;
  flex-direction: column;
  box-sizing: border-box;
`

const AllPokemons = styled.div`
  margin-top: 30px;
  font-size: 18px;
`

const myPartyKey = 'my Pokemons'

function HomePage() {
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState([])
  const [favorites, setFavorites] = useState([])

  const myPartyPokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(myPartyKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    fetchAllPokemons()
  }, [])

  useEffect(() => {
    myPartyPokemons()
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

  const updateFavoritePokemons = (pokemon) => {
    let updatedFavorites = [...favorites]
    const isAlreadyFavorite = favorites.filter((p) => pokemon.id === p.id).length > 0
    if (isAlreadyFavorite) {
      updatedFavorites = updatedFavorites.filter((p) => pokemon.id != p.id)
    } else {
      updatedFavorites.push(pokemon)
    }
    window.localStorage.setItem(isAlreadyFavorite, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  return (
    <>
      <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updateFavoritePokemons: updateFavoritePokemons
        }}
      >
        <NavBar />
        <Body>
          <Container>
            <TitlePokedex>
              <IconImages imageName="pokedexIcon" type="svg" />
              <H1>
                Hey, Ash! <br></br> Eu sou sua nova Pokédex
              </H1>
            </TitlePokedex>
            <H1>Qual pokémon você deseja pesquisar hoje?</H1>
            <SearchBarInput />
            <SecondaryContainer>
              <MyFavorites />
              <AllPokemons>
                <H2>Pokedéx</H2>
              </AllPokemons>
              <Pokedex loading={loading} pokemon={pokemon} />
            </SecondaryContainer>
          </Container>
        </Body>
      </FavoriteProvider>
    </>
  )
}

export default HomePage
