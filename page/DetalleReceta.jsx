import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetalleReceta.css";
import "bootstrap/dist/css/bootstrap.min.css";

// https://api.spoonacular.com/recipes/{id}/information
// /recipes/{id}/information

export const DetalleReceta = () => {
  const [receta, setReceta] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    get(`/recipes/${id}/information`).then((data) => {
      console.log(data);
      setReceta(data);
    });
  }, [id]);

  if (!receta) {
    return null;
  }

  return (
    <div  className="contenedorDetalle">
      <div className="card mb-3 text-center shadow align-items-center" style={{width:"45%", justifyContent:"center"}}>
        <img className=" card-img-top " src={receta.image} alt={receta.title} />
        <div className="recetadetalle  card-body text-center">
          <p className=" card-title">
           <h3> <strong> {receta.title}{" "} </strong></h3>            
          </p>
          <p className="pt-3">
            <strong>Tipos de platos: </strong>
            {receta.dishTypes.map((dishType) => dishType).join(", ")}
          </p>

          <p>
            <strong>Ingredientes: </strong>
            {receta.extendedIngredients
              .map((extendedIngredient) => extendedIngredient.aisle)
              .join(", ")}
          </p>

          <p>
            <strong>Instrucciones: </strong>
            {receta.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};
