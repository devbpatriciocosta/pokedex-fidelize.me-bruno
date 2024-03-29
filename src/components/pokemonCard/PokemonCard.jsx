/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { useState, useContext } from 'react'

import { AiFillLike } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styled from 'styled-components'

import H2 from '../typograph/H2'

import FavoriteContext from '../../context/favorites'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 430px;
  color: white;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  box-shadow: 10px 10px 10px 5px rgba(51, 51, 51, 0.8);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border: 10px solid ${(props) => props.theme.primary};
  overflow: hidden;

  :hover {
    transform: scale(1.1);
    border: 10px solid ${(props) => props.theme.secondary};
    overflow: auto;
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
  margin: 10px 0px 20px 160px;
  gap: 20px;
`

const StyledLikeIcon = styled.div`
  display: flex;
  color: black;
  font-size: 24px;
  margin-top: 10px;
`

const StyledMoreInfoIcon = styled.div`
  display: flex;
  color: black;
  font-size: 24px;
  margin-top: 10px;
`

const transformTypeInColor = (color) => {
  const colors = {
    grass: '#2E8B57',
    fire: '#ec4a4a',
    water: '#4ea1f0',
    bug: '#bdee7c',
    flying: '#50c1eeff',
    normal: '#cfe8f1',
    poison: '#9470e8',
    electric: '#ffff7b',
    ground: '#6E4229',
    fairy: '#e4a3c1',
    fighting: '#000000',
    psychic: '#5b2ace',
    rock: '#A6A5AC',
    ghost: '#65767C',
    ice: '#9cd6ec',
    dragon: '#9B5353'
  }
  return colors[color] || 'rgb(175, 175,175,0.25)'
}

const PokemonCard = ({ ...props }) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
  const { pokemon } = props
  const [moreInfo, setMoreInfo] = useState(false)

  const handleMoreInfo = async () => {
    setMoreInfo(!moreInfo)
  }

  const onLikeClick = async () => {
    updateFavoritePokemons(pokemon)
  }

  const like = favoritePokemons.includes(pokemon) ? <AiFillLike /> : <AiOutlineLike />

  return (
    <CardContainer color={transformTypeInColor(pokemon.types[0].type.name)}>
      <StyledIcons>
        <StyledLikeIcon onClick={onLikeClick}>{like}</StyledLikeIcon>
        <StyledMoreInfoIcon>
          <AiOutlinePlusCircle onClick={handleMoreInfo} />
        </StyledMoreInfoIcon>
      </StyledIcons>
      {!moreInfo && (
        <>
          <H2>HP: {pokemon.stats[0].base_stat}</H2>
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} height="180px" />
          <StyledPokemonData>
            <StyledPokemonNameAndNumber>
              <H2>
                {pokemon.name} #{pokemon.id}
              </H2>
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
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} height="110px" />
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
