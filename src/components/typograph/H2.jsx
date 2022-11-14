import styled from 'styled-components'

const H2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 50px;
  color: ${(props) => props.theme.secondary};
  text-align: center;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
`

export default H2
