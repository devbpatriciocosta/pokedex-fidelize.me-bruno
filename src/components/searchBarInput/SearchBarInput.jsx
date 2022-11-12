/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import IconImages from '../iconImages/IconImages'
import ButtonAdding from '../button/SearchButton'
import { searchPokemon } from '../../../pages/api/pokedex/pokemonApi'

import { useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
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

const SearchBarInput = ({ ...props }) => {
  const [search, setSearch] = useState('ditto')
  const [pokemon, setPokemon] = useState()
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)

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

  const onLikeClick = () => {
    updateFavoritePokemons(
      <CardContainer>
        <StyledLikeIcon>
          <AiFillLike />
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
        <CardContainer>
          <StyledLikeIcon onClick={onLikeClick}>{like}</StyledLikeIcon>
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
        </CardContainer>
      ) : null}
    </>
  )
}

export default SearchBarInput
