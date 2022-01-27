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
import { RiGhostFill } from "react-icons/ri";
import { GiWerewolf } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

function CharacterDetail(props) {
  const getSpecies = () => {
    if (props.character.species === "human") {
      return (
        <p className="infoDetails">
          Especie: Humano - <FaUser className="speciesIcon" />
        </p>
      );
    } else if (props.character.species === "half-giant") {
      return (
        <p className="infoDetails">
          Especie: Gigante - <GiGiant className="speciesIcon" />
        </p>
      );
    } else if (props.character.species === "ghost") {
      return (
        <p className="infoDetails">
          Especie: Fantasma - <RiGhostFill className="speciesIcon" />
        </p>
      );
    } else if (props.character.species === "werewolf") {
      return (
        <p className="infoDetails">
          Especie: Licántropo - <GiWerewolf className="speciesIcon" />
        </p>
      );
    }
  };

  const getHouse = () => {
    if (props.character.house === "Gryffindor") {
      return (
        <p className="infoDetails">
          Casa: {props.character.house}
          <img
            className="houseIcon"
            src={gryffindorIcon}
            alt="Icono de Gryffindor"
            title="Icono de Gryffindor"
          />
        </p>
      );
    } else if (props.character.house === "Slytherin") {
      return (
        <p className="infoDetails">
          Casa: {props.character.house}
          <img
            className="houseIcon"
            src={slytherinIcon}
            alt="Icono de Slytherin"
            title="Icono de Slytherin"
          />
        </p>
      );
    } else if (props.character.house === "Hufflepuff") {
      return (
        <p className="infoDetails">
          Casa: {props.character.house}
          <img
            className="houseIcon"
            src={huffepuffIcon}
            alt="Icono de Hufflepuff"
            title="Icono de Hufflepuff"
          />
        </p>
      );
    } else if (props.character.house === "Ravenclaw") {
      return (
        <p className="infoDetails">
          Casa: {props.character.house}
          <img
            className="houseIcon"
            src={ravenclawIcon}
            alt="Icono de Ravenclaw"
            title="Icono de Ravenclaw"
          />
        </p>
      );
    }
  };

  const getStatus = () => {
    if (props.character.status) {
      return (
        <p className="infoDetails">
          Estatus: Vivo <FaHeartbeat className="statusIconAlive" />
        </p>
      );
    } else {
      return (
        <p className="infoDetails">
          Estatus: Muerto <GiDeadHead className="statusIconDeath" />
        </p>
      );
    }
  };

  const getGender = () => {
    return props.character.gender === "female" ? "Mujer" : " Hombre";
  };

  return (
    <section className="sectionDetail">
      <Link className="linkHome" to="/" title="Volver al inicio">
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
        title={`Imagen de ${props.character.name}`}
      />

      <p className="infoDetails">{props.character.name}</p>

      {getSpecies()}

      {getHouse()}

      {getStatus()}

      <p className="infoDetails">Género: {getGender()}</p>

      <p className="infoDetails">{props.character.alternateNames}</p>
    </section>
  );
}
export default CharacterDetail;
