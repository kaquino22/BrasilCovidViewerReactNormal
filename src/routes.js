import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import main from './pages/main';
import sobre from './pages/sobre';
import ajuda from './pages/ajuda';
import cuidados from './pages/cuidados';
import graficos from './pages/graficos';


const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={main}/>
        <Route path="/sobre" component={sobre}/>
        <Route path="/ajuda" component={ajuda}/>
        <Route path="/cuidados" component={cuidados}/>
        <Route path="/graficos" component={graficos}/>
    </Switch>   
  </BrowserRouter>
);

export default Routes;