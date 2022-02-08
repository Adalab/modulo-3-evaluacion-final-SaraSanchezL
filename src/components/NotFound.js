import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link className="linkHome" to="/" title="Volver al inicio">
        Volver al inicio
      </Link>
      <h2>Ruta no encontrada</h2>
    </div>
  );
};

export default NotFound;
