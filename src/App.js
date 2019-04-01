import React, { Component } from 'react';
import './App.css';
import { About }  from "./components/About";
import { Home }  from "./components/Home";
import SteppersVertical from "./components/StrategySteppers"

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <SteppersVertical/>
        <About/>
      </div>
    );
  }
}

export default App;
