import NavBar from '../src/components/navBar/NavBar'
import Body from '../src/components/layout/body/Body'
import Container from '../src/components/layout/container/Container'
import H1 from '../src/components/typograph/H1'

function HomePage() {
  return (
    <>
      <NavBar />
      <Body>
        <Container>
          <H1>
            Hey, Ash! <br></br>Qual pokémon você deseja pesquisar hoje?
          </H1>
        </Container>
      </Body>
    </>
  )
}

export default HomePage
