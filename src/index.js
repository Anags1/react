import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

import App from './App';

//ReactDOM.render(
   // <App />,
   // document.getElementById('root')
//);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);