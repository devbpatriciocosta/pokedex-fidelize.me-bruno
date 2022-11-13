/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import H2 from '../typograph/H2'
import { AiOutlineLike } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
import { useContext } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import FavoriteContext from '../../context/favorites'
import { useState } from 'react'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 420px;
  color: white;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  box-shadow: 10px 10px 10px 5px rgba(51, 51, 51, 0.8);
  transition: 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`

const StyledPokemonData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledPokemonNameAndNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  text-transform: capitalize;
`

const StyledPokemonType = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const StyledIcons = styled.div`
  display: flex;
  margin-left: 160px;
  gap: 20px;
`

const StyledLikeIcon = styled.div`
  display: flex;
  color: black;
  font-size: 24px;
  margin-top: 10px;
`

const transformTypeInColor = (color) => {
  const colors = {
    bulbasaur: '#2E8B57',
    ivysaur: '#2E8B57',
    venusaur: '#2E8B57',
    charmander: '#ec4a4a',
    charmeleon: '#ec4a4a',
    charizard: '#ec4a4a',
    squirtle: '#00008B',
    wartortle: '#00008B',
    blastoise: '#00008B',
    caterpie: '#2E8B57',
    metapod: '#2E8B57',
    butterfree: '#2E8B57',
    eletric: '#EEEE00'
  }
  return colors[color] || 'rgb(175, 175,175,0.25)'
}

const PokemonCard = ({ ...props }) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
  const { pokemon } = props
  const [moreInfo, setMoreInfo] = useState(false)
  const [moreInfoFavorites, setMoreInfoFavorites] = useState(false)

  const handleMoreInfo = async () => {
    setMoreInfo(!moreInfo)
    console.log('mais info')
  }

  const handleMoreInfoFavorites = async () => {
    setMoreInfoFavorites(!moreInfoFavorites)
    console.log('mais info dos fav')
  }

  const onLikeClick = async () => {
    updateFavoritePokemons(
      <CardContainer color={transformTypeInColor(pokemon.name)}>
        <StyledIcons>
          <StyledLikeIcon>
            <AiFillLike />
            <AiOutlinePlusCircle onClick={handleMoreInfoFavorites} />
          </StyledLikeIcon>
        </StyledIcons>
        {!moreInfoFavorites && (
          <>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <StyledPokemonData>
              <StyledPokemonNameAndNumber>
                <H2>Nome: {pokemon.name}</H2>
                <H2>#{pokemon.id}</H2>
              </StyledPokemonNameAndNumber>
              <StyledPokemonType>
                {pokemon.types.map((type, index) => {
                  return <H2 key={index}>{type.type.name}</H2>
                })}
              </StyledPokemonType>
            </StyledPokemonData>
          </>
        )}
        {moreInfoFavorites && (
          <>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <StyledPokemonData>
              <StyledPokemonNameAndNumber>
                {pokemon.abilities.map((ability, index) => {
                  return <H2 key={index}>{ability.ability.name}</H2>
                })}
                <H2>Peso: {pokemon.weight} Kg</H2>
                <H2>Altura: {pokemon.height} m</H2>
              </StyledPokemonNameAndNumber>
            </StyledPokemonData>
          </>
        )}
      </CardContainer>
    )
  }

  const like = favoritePokemons.includes(pokemon.name) ? <AiFillLike /> : <AiOutlineLike />

  return (
    <CardContainer color={transformTypeInColor(pokemon.name)}>
      <StyledIcons>
        <StyledLikeIcon onClick={onLikeClick}>{like}</StyledLikeIcon>
        <StyledLikeIcon>
          <AiOutlinePlusCircle onClick={handleMoreInfo} />
        </StyledLikeIcon>
      </StyledIcons>
      {!moreInfo && (
        <>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <StyledPokemonData>
            <StyledPokemonNameAndNumber>
              <H2>Nome: {pokemon.name}</H2>
              <H2>#{pokemon.id}</H2>
            </StyledPokemonNameAndNumber>
            <StyledPokemonType>
              {pokemon.types.map((type, index) => {
                return <H2 key={index}>{type.type.name}</H2>
              })}
            </StyledPokemonType>
          </StyledPokemonData>
        </>
      )}
      {moreInfo && (
        <>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <StyledPokemonData>
            <StyledPokemonNameAndNumber>
              {pokemon.abilities.map((ability, index) => {
                return <H2 key={index}>{ability.ability.name}</H2>
              })}
              <H2>Peso: {pokemon.weight} Kg</H2>
              <H2>Altura: {pokemon.height} m</H2>
            </StyledPokemonNameAndNumber>
          </StyledPokemonData>
        </>
      )}
    </CardContainer>
  )
}

export default PokemonCard
