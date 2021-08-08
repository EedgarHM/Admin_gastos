import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({setGasto,setCrearGasto}) => {
    // Creacion de los state
    const [nombre,guardarNombre] = useState('');
    const [cantidad,setCantidad] = useState(0);
    const [error,setError] = useState(false);
    //  Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //  Validar
        if(cantidad<1 || isNaN(cantidad || nombre.trim()==='')){
            setError(true);
            return;
        }
        setError(false)
        //  Construir Gasto
        const gasto = {
            nombre,
            cantidad,
            id : shortid.generate()
        }
        //  Enviando al componente principal 
        setGasto(gasto);
        setCrearGasto(true)
        //  Limpiando el formulario
        guardarNombre('');
        setCantidad(0);
    }

    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje=" El Gasto debe ser mayor a 0 "/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;