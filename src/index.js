import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-tic-tac-toe/dist/TicTacToe.js';
import 'react-tic-tac-toe/dist/TicTacToe.min.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
