const Character = (props) => {
  return (
    <>
    <img src={props.character.image === '' ? `https://via.placeholder.com/300x300/0000FF/ffffff/?text=${props.character.name}` : props.character.image } alt={`Foto de ${props.character.name}`} />
    <p>{props.character.name}</p>
    <p>{props.character.species}</p>
    </>
  )
}

export default Character;