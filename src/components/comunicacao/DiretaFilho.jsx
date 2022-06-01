import React from "react";


export default props => {
    
    let jsxdofilho = (
        <div>
            <span>{props.texto}</span>
            <span>{props.numero}</span>
            <span>{props.bool ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    );

    return jsxdofilho; 
}