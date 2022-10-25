import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Peliculas from './pages/PeliculasP';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>Simulacro Parcial PNT2</div>
          <div>Ezequiel Hoyos</div>
        </Route>
        <Route path="/peliculas" exact>
          <Peliculas pageSize={10} page={1}></Peliculas>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
