import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import  { BarNav }  from "./components/barNav";
import { About }  from "./components/About";
import { Home }  from "./components/Home";


class App extends Component {
  render() {
    return (
      <div>
        <BarNav/>
        <BrowserRouter>
        <Switch>
          <Route exact path="FreelanceToBusiness/" component={Home} />
          <Route exact path="FreelanceToBusiness/about" component={About} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
