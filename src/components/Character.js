import "../styles/Character.scss";
import { Link } from "react-router-dom";
import invisibilityImg from "../images/harry-potter-capa-invisibilidad.jpg";

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

  const getInfoImg = () => {
    if (props.character.image === "") {
      return "Este personaje está usando la capa de invisibilidad.";
    }
  };

  return (
    <>
      <img
        className="img"
        src={
          props.character.image === "" ? invisibilityImg : props.character.image
        }
        alt={`Foto de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <p className="infoCharacter">{getInfoImg()}</p>
      <p className="infoCharacter">{props.character.name}</p>
      <p className="infoCharacter">Especie: {getSpicies()}</p>
      <Link className="link" to={`/character/${props.character.id}`}>
        Más detalles
      </Link>
    </>
  );
};

export default Character;
