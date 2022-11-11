import styled from 'styled-components'

const PokedexContainer = styled.div`
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

export default function Pokedex() {
  return <PokedexContainer></PokedexContainer>
}
