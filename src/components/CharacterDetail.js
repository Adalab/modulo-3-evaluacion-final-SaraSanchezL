import { Link } from "react-router-dom";
function CharacterDetail(props) {
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

  const getGender = () => {
    return props.character.gender === "female" ? "Mujer" : " Hombre";
  };

  return (
    <section>
      <Link to="/"> Volver al inicio</Link>
      <h2>Detalle del Personaje</h2>
      <img
        src={
          props.character.image === ""
            ? `https://via.placeholder.com/300x300/0000FF/ffffff/?text=${props.character.name}`
            : props.character.image
        }
        alt={`Foto de ${props.character.name}`}
      />
      <p>{props.character.name}</p>
      <p>Estatus: {props.character.status ? "Vivo" : "Muerto"}</p>
      <p>Especie: {getSpicies()}</p>
      <p>Género: {getGender()}</p>
      <p>Casa: {props.character.house}</p>
      <p>{props.character.alternateNames}</p>
    </section>
  );
}
export default CharacterDetail;
