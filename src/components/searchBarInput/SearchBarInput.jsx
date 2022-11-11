/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import IconImages from '../iconImages/IconImages'
import ButtonAdding from '../button/SearchButton'
import { searchPokemon } from '../../../pages/api/pokedex/pokemonApi'

import { useState } from 'react'

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

const SearchBarInput = ({ ...props }) => {
  const [search, setSearch] = useState('ditto')
  const [pokemon, setPokemon] = useState()

  const onChangeHandler = (event) => {
    setSearch(event.target.value)
  }

  const onClickHandler = () => {
    onSearchHandler(search)
  }

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
  }

  return (
    <>
      <IconImageContainer>
        <ContainerInput>
          <StyledInput
            type="text"
            placeholder="Pesquise por nome, tipo ou poder..."
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
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div>Nome: {pokemon.name}</div>
          <div>Peso: {pokemon.weight} kg</div>
        </div>
      ) : null}
    </>
  )
}

export default SearchBarInput
