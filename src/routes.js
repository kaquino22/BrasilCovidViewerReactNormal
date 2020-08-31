import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import inicio from './pages/main';
import apresentacao from './pages/apresentacao';
import sobre from './pages/sobre';
import ajuda from './pages/ajuda';
import cuidados from './pages/cuidados';
import graficos from './pages/graficos';
import documentacao from './pages/documentacao';


const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={apresentacao}/>
        <Route path="/inicio" component={inicio}/>
        <Route path="/documentacao" component={documentacao}/>
        <Route path="/sobre" component={sobre}/>
        <Route path="/ajuda" component={ajuda}/>
        <Route path="/cuidados" component={cuidados}/>
        <Route path="/graficos" component={graficos}/>
    </Switch>   
  </BrowserRouter>
);

export default Routes;