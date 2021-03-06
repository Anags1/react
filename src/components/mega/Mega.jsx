import React, { useState } from "react";
import './Mega.css';

export default props => {
    function gerarNumNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) ;
        return array.includes(aleatorio) ? 
        gerarNumNaoContido(min, max, array) : 
        aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            . reduce((nums) => {
                const novoNumero = gerarNumNaoContido(1, 60, nums)
                return [...nums, novoNumero];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numeros;
    }

    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = gerarNumeros(qtde);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join (' ')}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input 
                    min="6"
                    max="7"
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }}             
                />
            </div>
            <button onclick={(_) => setNumeros(gerarNumeros(qtde))}>
                    Gerar Números
            </button>
        </div>
    );
};