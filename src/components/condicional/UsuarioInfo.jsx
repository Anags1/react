import React from "react";
import If from "./If";

export default props => {
    const usuario = props.usuario || {}
    <div>
        Seja bem vindo <strong>{usuario.nome}</strong>!
    </div>
}