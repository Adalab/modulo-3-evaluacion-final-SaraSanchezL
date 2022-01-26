import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";
//Images
import gryffindorIcon from "../images/gryffindorIcon.jpg";
import slytherinIcon from "../images/slytherinIcon.jpg";
import ravenclawIcon from "../images/ravenclawIcon.jpg";
import huffepuffIcon from "../images/hufflepuffIcon.jpg";
// React Icons
import { FaHeartbeat } from "react-icons/fa";
import { GiDeadHead } from "react-icons/gi";
import { GiGiant } from "react-icons/gi";
import { BiGhost } from "react-icons/bi";
import { GiWerewolf } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

function CharacterDetail(props) {
  const getSpicies = () => {
    if (props.character.species === "human") {
      return (
        <span>
          Humano - <FaUser className="speciesIcon" />
        </span>
      );
    } else if (props.character.species === "half-giant") {
      return (
        <span>
          Gigante - <GiGiant className="speciesIcon" />
        </span>
      );
    } else if (props.character.species === "ghost") {
      return (
        <span>
          Fantasma - <BiGhost className="speciesIcon" />
        </span>
      );
    } else if (props.character.species === "werewolf") {
      return (
        <span>
          Licántropo - <GiWerewolf className="speciesIcon" />
        </span>
      );
    }
  };

  const getGender = () => {
    return props.character.gender === "female" ? "Mujer" : " Hombre";
  };

  const getHouseIcon = () => {
    if (props.character.house === "Gryffindor") {
      return (
        <img className="houseIcon" src={gryffindorIcon} alt="Gryffindor Icon" />
      );
    } else if (props.character.house === "Slytherin") {
      return (
        <img className="houseIcon" src={slytherinIcon} alt="Slytherin Icon" />
      );
    } else if (props.character.house === "Hufflepuff") {
      return (
        <img className="houseIcon" src={huffepuffIcon} alt="Hufflepuff Icon" />
      );
    } else if (props.character.house === "Ravenclaw") {
      return (
        <img className="houseIcon" src={ravenclawIcon} alt="Ravenclaw Icon" />
      );
    }
  };

  const getStatusIcon = () => {
    if (props.character.status) {
      return (
        <span className="statusIconAlive">
          <FaHeartbeat />
        </span>
      );
    } else {
      return (
        <span className="statusIconDeath">
          <GiDeadHead />
        </span>
      );
    }
  };

  return (
    <section className="sectionDetail">
      <Link className="linkHome" to="/">
        Volver al inicio
      </Link>
      <h2 className="titleDetails">Detalle del Personaje</h2>
      <img
        className="imgDetail"
        src={
          props.character.image === ""
            ? `https://via.placeholder.com/300x300/000000/ffffff/?text=${props.character.name}`
            : props.character.image
        }
        alt={`Foto de ${props.character.name}`}
      />
      <p className="infoDetails">{props.character.name}</p>
      <p className="infoDetails">
        Estatus: {props.character.status ? "Vivo" : "Muerto"} {getStatusIcon()}
      </p>
      <p className="infoDetails">Especie: {getSpicies()}</p>
      <p className="infoDetails">Género: {getGender()}</p>
      <p className="infoDetails">
        Casa: {props.character.house} {getHouseIcon()}
      </p>
      <p className="infoDetails">{props.character.alternateNames}</p>
    </section>
  );
}
export default CharacterDetail;
