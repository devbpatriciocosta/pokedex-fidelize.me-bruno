/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import H2 from '../typograph/H2'
import { AiOutlineLike } from 'react-icons/ai'
import { useContext } from 'react'
import FavoriteContext from '../../context/favorites'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 280px;
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
  justify-content: center;
  gap: 10px;
  text-transform: capitalize;
`

const StyledPokemonType = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const StyledLikeIcon = styled.div`
  color: black;
  font-size: 24px;
  margin-top: 10px;
  margin-left: 200px;
  cursor: pointer;
`

const transformColor = (type) => {
  const colors = {
    fire: '#CD5555',
    grass: '#2E8B57',
    water: '#00008B',
    eletric: '#EEEE00'
  }
  return colors[type] || 'rgb(175, 175,175,0.25)'
}

const PokemonCard = ({ ...props }) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
  const { pokemon } = props

  const onLikeClick = async () => {
    console.log('Meu Pokemon Favorito')
    updateFavoritePokemons(
      <CardContainer color={transformColor(pokemon.type)}>
        <StyledLikeIcon>
          <AiOutlineLike onClick={onLikeClick} />
        </StyledLikeIcon>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <StyledPokemonData>
          <StyledPokemonNameAndNumber>
            <H2>Nome: {pokemon.name}</H2>
            <H2>#{pokemon.id}</H2>
          </StyledPokemonNameAndNumber>
          <StyledPokemonType>
            {pokemon.types.map((type, index) => {
              console.log(type, index)
              return <H2 key={index}>{type.type.name}</H2>
            })}
          </StyledPokemonType>
        </StyledPokemonData>
      </CardContainer>
    )
  }

  return (
    <CardContainer color={transformColor(pokemon.type)}>
      <StyledLikeIcon>
        <AiOutlineLike onClick={onLikeClick} />
      </StyledLikeIcon>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <StyledPokemonData>
        <StyledPokemonNameAndNumber>
          <H2>Nome: {pokemon.name}</H2>
          <H2>#{pokemon.id}</H2>
        </StyledPokemonNameAndNumber>
        <StyledPokemonType>
          {pokemon.types.map((type, index) => {
            console.log(type, index)
            return <H2 key={index}>{type.type.name}</H2>
          })}
        </StyledPokemonType>
      </StyledPokemonData>
    </CardContainer>
  )
}

export default PokemonCard
