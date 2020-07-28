import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/cadastro/video" component={CadastroVideo}/>
    <Route path="/cadastro/categoria" component={CadastroCategoria}/>
    <Route path="/" component={Home} exact/>
    <Route component={() => (<div>Pagina 404</div>)} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
