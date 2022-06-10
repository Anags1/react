import "./App.css";
import React from "react";
import Card from "./components/layout/Card";

import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ProductTable from "./components/repeticao/ProductTable";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";


export default () => (

        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#12- Contador (Input)" color="#424242">
                    <Contador numeroInicial={10}></Contador>
                </Card>
                
                <Card titulo="#11- Componente Controlado (Input)" color="#E45F56">
                    <Input></Input>
                </Card>


                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                </Card>


                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>                  
                </Card>


                <Card titulo="#08 - Renderização Condicional" color="#982395">
                   <ParOuImpar numero={20}></ParOuImpar>
                   <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                   <UsuarioInfo usuario={{email: 'fer@nando.com'}}></UsuarioInfo>
                </Card>


                <Card titulo="#07 - Replay Challenge" color="#3A9AD9">
                   <ProductTable></ProductTable>
                </Card>
                

                <Card titulo="#06 - Repetição" color="#FF4C065">
                   <ListaAlunos></ListaAlunos>
                </Card>


                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro " />
                         <FamiliaMembro nome="Ana " />
                        <FamiliaMembro nome="Gustavo " />
                    </Familia>
                </Card>


                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>


                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>


                <Card titulo="#02 - Com Parâmetro" color="E8B71A">
                    <ComParametro 
                    titulo="Situaçao do aluno: "
                    aluno="Pedro " 
                    nota={ 9.5 } />
                </Card>


                <Card titulo="#01 - Primeiro Componente" color="588C73">
                    <Primeiro/>
                </Card>

            </div>
        </div> 
);