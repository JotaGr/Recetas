import { RecetasCard } from "./RecetasCard";
import "./RecetasGrid.css"

import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";

export const RecetasGrid = () => {

  const [recetas,setRecetas] = useState([])

useEffect(()=>{
  get("/recipes/complexSearch").then((data)=>{
  console.log(data);
  setRecetas(data.results)
})
},[])


   return (
   <ul className="recetasGrid">
      
      {recetas.map((receta)=>(
        <RecetasCard key={receta.id} receta={receta}/>
      ))}
 
      
    </ul>
  );
 };
