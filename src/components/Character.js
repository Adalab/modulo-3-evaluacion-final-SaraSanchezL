import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Character = (props) => {
  const getSpicies = () => {
    if (props.character.species === "human") {
      return "Humano";
    } else if (props.character.species === "half-giant") {
      return "Gigante";
    } else if (props.character.species === "ghost") {
      return "Fantasma";
    } else if (props.character.species === "werewolf") {
      return "Licántropo";
    }
  };

  return (
    <>
      <img
        src={
          props.character.image === ""
            ? `https://via.placeholder.com/300x300/000000/ffffff/?text=${props.character.name}`
            : props.character.image
        }
        alt={`Foto de ${props.character.name}`}
      />
      <p>{props.character.name}</p>
      <p>Especie: {getSpicies()}</p>
      <Link to={`/character/${props.character.id}`}>Más detalles</Link>
    </>
  );
};

export default Character;
