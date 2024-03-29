/* eslint-disable @next/next/no-img-element */
import { useState, useContext } from 'react'

import { AiFillLike } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styled from 'styled-components'

import IconImages from '../iconImages/IconImages'
import ButtonAdding from '../button/SearchButton'
import H2 from '../typograph/H2'

import { searchPokemon } from '../../../pages/api/pokedex/pokemonApi'

import FavoriteContext from '../../context/favorites'

const IconImageContainer = styled.div`
  padding: 52px 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`

const ContainerInput = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  width: 740px;
  height: 60px;
  left: 228px;
  top: 132px;
  background-color: ${(props) => props.theme.white};
  padding: 10px 50px;
  padding-left: 80px;
  border-radius: 100px;
  border: 5px solid ${(props) => props.theme.primary};
  font-size: 30px;
  color: #000000;
  text-transform: capitalize;
  transition: 0.2s ease-in-out;

  :hover {
    border: 5px solid ${(props) => props.theme.secondary};
  }

  @media (max-width: 850px) {
    width: auto;
  }

  @media (max-width: 630px) {
    width: 400px;
  }

  @media (max-width: 510px) {
    width: 300px;
  }

  @media (max-width: 420px) {
    width: 300px;
  }
`

const StyledIconPosition = styled.div`
  position: absolute;
  top: 15px;
  left: 30px;
  font-size: 30px;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 430px;
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
  margin-left: 160px;
  gap: 20px;
`

const StyledLikeIcon = styled.div`
  display: flex;
  color: black;
  font-size: 24px;
  margin-top: 10px;
  cursor: pointer;
`

const StyledMoreInfoIcon = styled.div`
  display: flex;
  color: black;
  font-size: 24px;
  margin-top: 10px;
`

const SearchBarInput = ({ ...props }) => {
  const [search, setSearch] = useState('ditto')
  const [pokemon, setPokemon] = useState()
  const [moreInfo, setMoreInfo] = useState(false)
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)

  const transformTypeInColor = (color) => {
    const colors = {
      grass: '#2E8B57',
      fire: '#f16363',
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

  const onChangeHandler = (event) => {
    setSearch(event.target.value)
    if (event.target.value === 0) {
      onSearchHandler(undefined)
    }
  }

  const onClickHandler = () => {
    onSearchHandler(search)
  }

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
  }

  const handleMoreInfo = async () => {
    setMoreInfo(!moreInfo)
  }

  const onLikeClick = () => {
    updateFavoritePokemons(pokemon)
  }

  const like = favoritePokemons.includes(pokemon) ? <AiFillLike /> : <AiOutlineLike />

  return (
    <>
      <IconImageContainer>
        <ContainerInput>
          <StyledInput
            type="text"
            placeholder="Pesquise por nome..."
            {...props}
            onChange={onChangeHandler}
          />
          <StyledIconPosition>
            <IconImages imageName="pokeBall" type="svg" />
          </StyledIconPosition>
        </ContainerInput>
        <ButtonAdding onClick={onClickHandler}>Buscar</ButtonAdding>
      </IconImageContainer>
      {pokemon ? (
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
              <img
                src={pokemon.sprites.other.home.front_default}
                alt={pokemon.name}
                height="180px"
              />
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
              <img
                src={pokemon.sprites.other.home.front_default}
                alt={pokemon.name}
                height="110px"
              />
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
      ) : null}
    </>
  )
}

export default SearchBarInput
