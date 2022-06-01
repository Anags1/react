import '.Input.css';
import React, { useState } from 'react';

export default props => {

    const [valor, setValor] = useState('Inicial');

    return (
        <div className="Input">
            <input value={valor} />
        </div>
    )
}