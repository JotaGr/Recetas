import "./App.css";
import { LandingPage } from "./page/LandingPage";
import { DetalleReceta } from "./page/DetalleReceta";
import { ConsultaIngredientes } from "./components/ConsultaIngredientes";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './fonts/fonts.css' 
import { Footer } from "./components/Footer";


/*  import { RecetasGrid } from "./components/RecetasGrid.jsx"
 */


export const App = ()=>{
  return(
    <BrowserRouter>
       <header>
        <Link style={{textDecoration: 'none'}} to="/">
    <h1  className="title hvr-pop pt-2 ">Tus Recetas</h1>
      </Link> 
      <Link to="/consultaingredientes">
      <button className="btn btn-outline-success title ">Buscar por ingrediente</button></Link> 
      </header>
      
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/receta/:id" element = {<DetalleReceta />}/>
      
        <Route path="/consultaingredientes" element = {<ConsultaIngredientes />}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
  
}