import { Link } from "react-router-dom";
const DetailsNotFound = () => {
  return (
    <div>
      <Link className="linkHome" to="/">
        Volver al inicio
      </Link>
      <p className="textNotFound">
        Detalles no encontrados, el personaje que buscas no existe.
      </p>
    </div>
  );
};

export default DetailsNotFound;
