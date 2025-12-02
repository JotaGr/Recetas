/* 

import { get } from "../../utils/httpCliente";
//importaciones
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



export const ConsultaIngredientes = () => {

    const [ingrediente, setIngrediente] = useState("")
    const [ingrediente2, setIngrediente2] = useState("")
    const [ingrediente3, setIngrediente3] = useState("")

    const [resultados, setResultados] = useState([]);       
    const [error, setError] = useState(null);                
    


    //navegacion luego de que se ejecute la funcion
    const navigate = useNavigate();



    //Funcion para crear consulta

    const CreateConsulta = async (e) => {
        e.preventDefault();


        // ingrediente: ingrediente,
        get(`/recipes/findByIngredients?ingredients=${ingrediente},+${ingrediente2},+${ingrediente3}`).then((data) => {
            console.log(data);

    
        })
        //navigate(get(`/recipes/findByIngredients?ingredients=${ingrediente}`))
        // navigate(`/recipes/findByIngredients?ingredients=${ingrediente}`)

    }




    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Ingrese Ingredientes:</h1>
                    <form onSubmit={CreateConsulta}>
                        <div className="mb-3">
                            <label className="form-label">Ingrediente 1: </label>


                            <input
                                value={ingrediente}
                                onChange={(e) => setIngrediente(e.target.value)}
                                className="form-control"
                                placeholder={ingrediente}
                                type="text" />


                        </div>


                        <div className="mb-3">
                            <label className="form-label">Ingrediente 2: </label>


                            <input
                                value={ingrediente2}
                                onChange={(e) => setIngrediente2(e.target.value)}
                                className="form-control"
                                placeholder={ingrediente2}
                                type="text" />


                        </div>


                        <div className="mb-3">
                            <label className="form-label">Ingrediente 3: </label>


                            <input
                                value={ingrediente3}
                                onChange={(e) => setIngrediente3(e.target.value)}
                                className="form-control"
                                placeholder={ingrediente3}
                                type="text" />


                        </div>
                        <button type="submit" className="btn btn-success">Consultar Ingrediente</button>
                    </form>
                    {resultados.length > 0 && (
            <div className="mt-4">
              <h2>Resultados:</h2>
              <div className="row">
                {resultados.map(receta => (
                  <div className="col-md-4 mb-3" key={receta.id}>
                    <div className="card">
                      <img src={receta.image} className="card-img-top" alt={receta.title} />
                      <div className="card-body">
                        <h5 className="card-title">{receta.title}</h5>
                        <Link to={`/recipes/${receta.id}`} className="btn btn-primary">
                          Ver receta
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

                </div>
            </div>


        </div>



    )
} */
    
    //importaciones
    import { useState } from "react"
    import { Link, useNavigate } from "react-router-dom"
    import { get } from "../../utils/httpCliente";
    import "./ConsultaIngredientes.css"
    
    
    export const ConsultaIngredientes = () => {
      const [ingrediente, setIngrediente] = useState("");
      const [ingrediente2, setIngrediente2] = useState("");
      const [ingrediente3, setIngrediente3] = useState("");
      const [resultados, setResultados] = useState([]);        // 1) Estado para guardar la respuesta
      const [error, setError] = useState(null);                // opcional: para manejar errores
    
      const CreateConsulta = async (e) => {
        e.preventDefault();                                     // ← crucial para que no recargue
        setError(null);
    
        // Construyo la lista de ingredientes, filtro vacíos y hago URL-safe
        const ingredientesList = [ingrediente, ingrediente2, ingrediente3]
          .filter(str => str.trim() !== "")
          .map(encodeURIComponent)
          .join(",");
    
        if (!ingredientesList) {
          setError("Debes ingresar al menos un ingrediente");
          return;
        }
    
        try {
          const data = await get(`/recipes/findByIngredients?ingredients=${ingredientesList}`);
            console.log(data);                                   
          setResultados(data);                                 // 2) guardo datos en el estado
        } catch (err) {
          console.error(err);
          setError("Error al consultar la API");
        }
      };
    
      return (
        <div className="container">
          <h1>Buscar recetas por ingrediente</h1>
          <form onSubmit={CreateConsulta}>
            {error && <div className="alert alert-danger">{error}</div>}
    
            {[{ val: ingrediente, fn: setIngrediente, label: "Ingrediente 1" },
              { val: ingrediente2, fn: setIngrediente2, label: "Ingrediente 2" },
              { val: ingrediente3, fn: setIngrediente3, label: "Ingrediente 3" }].map((fld, i) => (
              <div className="mb-3" key={i}>
                <label className="form-label">{fld.label}:</label>
                <input
                  type="text"
                  className="form-control"
                  value={fld.val}
                  onChange={e => fld.fn(e.target.value)}
                  placeholder={`Ej: ${fld.label.toLowerCase()}`}
                />
              </div>
            ))}
    
            <button type="submit" className="btn btn-success">
              Consultar
            </button>
          </form>
    
          {/* // 3 Muestro los resultados  */}
          {resultados.length > 0 && (
            <div className="mt-4">
              <h2>Resultados:</h2>
              <div className="row">
                {resultados.map(receta => (
                  <div className="col-md-4 mb-3" key={receta.id}>
                    <div className="card bg-card">
                      <img src={receta.image} className="card-img-top" alt={receta.title} />
                      <div className="card-body">
                        <h5 className="card-title">{receta.title}</h5>
                        <Link to={`/recipes/${receta.id}`} className="btn btn-primary">
                          Ver receta
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    };
