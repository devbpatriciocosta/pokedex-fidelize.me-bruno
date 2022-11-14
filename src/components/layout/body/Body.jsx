import styled from 'styled-components'

const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
`

export default function Body({ children }) {
  return <StyledBody>{children}</StyledBody>
}
