import React, {Fragment,useState} from 'react';
import Error from './Error';



const Pregunta = ({setPresupuesto,setRestante,actualizarPregunta}) => {
//  Definiendo el state
    const [cantidad,guardarCantidad] = useState(0);
    const [error,setError] = useState(false);
    

// Funcion que leee el presupuesto 
const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value));
}

//  Submit para definir el presupuesto
const agregarPresupuesto = e =>{
    e.preventDefault();

    // Validar la informacion 
    if(cantidad<=0 || isNaN(cantidad)){
        setError(true);
        return;
    }

    
    //Si pasa la validacion
    setError(false);

    setPresupuesto(cantidad);
    setRestante(cantidad);
    actualizarPregunta(false);
}

    return (  
        <Fragment>
            <h2> Coloca tu Presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es incorrecto"/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}/>

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;