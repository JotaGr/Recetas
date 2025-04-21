

import { get } from "../../utils/httpCliente";
//importaciones
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



export const ConsultaIngredientes = () => {

    const [ingrediente, setIngrediente] = useState("")
    const [ingrediente2, setIngrediente2] = useState("")
    const [ingrediente3, setIngrediente3] = useState("")


    //navegacion luego de que se ejecute la funcion
    const navigate = useNavigate();



    //Funcion para crear consulta

    const CreateConsulta = async (e) => {
       /*  e.preventDefault(); */


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
                    

                </div>
            </div>


        </div>



    )
}