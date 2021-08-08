import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  //  Definicion de los states
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos,setGastos]=useState([]);
  const [gasto,setGasto]= useState({});
  const [creargasto,setCrearGasto] = useState(false);
  // UseEffect que actualiza el restante 
  useEffect(()=>{

    //  Agregando el nuevo presupuesto
    if(creargasto){
      setGastos([
        ...gastos,
        gasto
      ]);

    // Agregando el presupuesto restante
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      setCrearGasto(false);
    }
  },[gasto,creargasto,gastos,restante])
  // Cuando se agrega un nuevo gasto 

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contanido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto = {setGasto}
                  setCrearGasto = {setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos = {gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
