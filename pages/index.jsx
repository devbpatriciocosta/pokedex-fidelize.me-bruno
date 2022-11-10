import NavBar from '../src/components/navBar/NavBar'
import Body from '../src/components/layout/body/Body'
import Container from '../src/components/layout/container/Container'

function HomePage() {
  return (
    <>
      <NavBar />
      <Body>
        <Container>
          <h1>Hello world, Pokedéx!</h1>
        </Container>
      </Body>
    </>
  )
}

export default HomePage
