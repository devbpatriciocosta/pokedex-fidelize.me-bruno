import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 42px;
  font-weight: bold;
  line-height: 50px;
  color: ${(props) => props.theme.secondary};
  text-align: center;

  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
`

export default H1
