import styled from 'styled-components'

import IconImages from '../iconImages/IconImages'

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  padding: 10px 0;
  background-color: ${(props) => props.theme.primary};

  @media (max-width: 868px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default function NavBar() {
  return (
    <>
      <StyledNavBar>
        <IconImages imageName="pokeLogo" type="svg" />
      </StyledNavBar>
    </>
  )
}
