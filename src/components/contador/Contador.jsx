import "./Contador.css";
import React, { Component } from 'react';
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 5,
    };

    /*constructor(props) {
        super(props)
        this.inc = this.inc.bind(this)
    }*/

    incremento = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };

    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    };

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setIncremento={this.incremento} setDecremento={this.decremento} />
            </div>
        );
    };
};

export default Contador;