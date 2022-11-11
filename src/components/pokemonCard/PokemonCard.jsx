const PokemonCard = ({ ...props }) => {
  const { pokemon } = props
  return <div>{pokemon.name}</div>
}

export default PokemonCard
