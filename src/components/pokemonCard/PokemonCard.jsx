/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 200px;
  padding: 30px;
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

const StyledPokemonName = styled.p`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  justify-content: center;
`

const PokemonCard = ({ ...props }) => {
  const { pokemon } = props
  return (
    <CardContainer>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <StyledPokemonName>Nome: {pokemon.name}</StyledPokemonName>
    </CardContainer>
  )
}

export default PokemonCard
