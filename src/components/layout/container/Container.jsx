import styled from 'styled-components'

const StyledMainContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  width: 1528px;
  min-height: 120vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  border: 3px solid black;
  border-radius: 50px;
`

const Container = ({ children }) => <StyledMainContainer>{children}</StyledMainContainer>

export default Container
