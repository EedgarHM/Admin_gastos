import React from 'react';
const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}
            <gasto className="gasto"> $ {gasto.cantidad}</gasto>
        </p>
    </li>
);
 
export default Gasto;