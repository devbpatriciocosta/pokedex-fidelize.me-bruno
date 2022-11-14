/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import IconImages from '../iconImages/IconImages'
import ButtonAdding from '../button/SearchButton'
import { searchPokemon } from '../../../pages/api/pokedex/pokemonApi'

import { useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import H2 from '../typograph/H2'
import { useContext } from 'react'
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
  border: none;
  font-size: 30px;
  color: #000000;
  text-transform: capitalize;

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
  color: white;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  box-shadow: 10px 10px 10px 5px rgba(51, 51, 51, 0.8);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border: 5px solid #fec20c;

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
  cursor: pointer;
`

const SearchBarInput = ({ ...props }) => {
  const [search, setSearch] = useState('ditto')
  const [pokemon, setPokemon] = useState()
  const [moreInfo, setMoreInfo] = useState(false)
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)

  const transformTypeInColor = (color) => {
    console.log(color)
    const colors = {
      grass: '#2E8B57',
      fire: '#ec4a4a',
      water: '#4ea1f0',
      bug: '#bdee7c',
      flying: '#50c1eeff',
      normal: '#cfe8f1',
      poison: '#9470e8',
      electric: '#ffff3a',
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
    console.log('mais info')
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
            <StyledLikeIcon>
              <AiOutlinePlusCircle onClick={handleMoreInfo} />
            </StyledLikeIcon>
          </StyledIcons>
          {!moreInfo && (
            <>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} height="400px" />
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
      ) : null}
    </>
  )
}

export default SearchBarInput
