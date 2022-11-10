import styled from 'styled-components'

import { useSWRConfig } from 'swr'

import axios from 'axios'

import { AiOutlineLike } from 'react-icons/ai'

const CardContainer = styled.div`
  width: 250px;
  height: 230px;
  padding: 10px;
  color: white;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  box-shadow: 10px 10px 10px 5px rgba(51, 51, 51, 0.8);
  transition: 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`

const StyledPokemonImage = styled.p`
  display: flex;
  margin: 30px 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  justify-content: center;
`

const StyledPokemonName = styled.p`
  display: flex;
  margin: 30px 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  justify-content: center;
`

const StyledPokemonType = styled.p`
  display: flex;
  margin: 30px 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  justify-content: center;
`

const StyledLikeIcon = styled.div`
  gap: 7px;
  border: none;
  display: flex;
  color: black;
  font-size: 24px;
  max-width: 100px;
  margin-left: 130px;
  cursor: pointer;
  justify-content: flex-end;
`

const transformColor = (type) => {
  const colors = {
    branca: '#ebebeb',
    branco: '#ebebeb',
    vermelho: '#CD5555',
    vermelha: '#CD5555',
    rosa: '#FF69B4',
    rose: '#FFC1C1',
    verde: '#2E8B57',
    prata: '#929292b9',
    azul: '#00008B',
    preto: 'rgb(0, 0, 0, 0.90)',
    preta: 'rgb(0, 0, 0, 0.8)',
    amarelo: '#EEEE00',
    dourado: '#FFEC8B',
    dourada: '#CD9B1D',
    laranja: '#FFA54F',
    Laranja: '#FF7F00',
    cinza: '#4F4F4F',
    marrom: '	#4d392f',
    roxo: '#A020F0',
    roxa: '#9932CC'
  }
  return colors[type] || 'rgb(175, 175,175,0.25)'
}

export default function Card({ name, type, image, id, isLiked }) {
  const { mutate } = useSWRConfig()

  const handleLike = async () => {
    try {
      const { status } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/pokemon/searchpokemon`,
        {
          _id: id,
          pokemonName: name,
          pokemonType: type,
          pokemonImage: image,
          isLiked: !isLiked
        }
      )
      if (status === 201) {
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/pokemon/searchpokemon`)
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  return (
    <>
      <CardContainer color={transformColor(type)}>
        <StyledLikeIcon>
          <AiOutlineLike onClick={handleLike} />
        </StyledLikeIcon>
        <StyledPokemonImage>{image}</StyledPokemonImage>
        <StyledPokemonName>{name}</StyledPokemonName>
        <StyledPokemonType>Tipo{type}</StyledPokemonType>
      </CardContainer>
    </>
  )
}
