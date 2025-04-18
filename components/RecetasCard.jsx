import {Link} from "react-router-dom"

import "./RecetasCard.css"

export const RecetasCard = ({ receta }) => {
  
  const imgURL=`${receta.image}`;
  return (
    <li className="recetasCard bg-gradient">
      <Link style={{textDecoration: 'none'}} to={`/receta/${receta.id}`}>
      <img className="recetaImage hvr-bob" src={imgURL} alt={receta.title} />
      <div className="text-dark">{receta.title}</div>
      </Link>
    </li>
  );
};
