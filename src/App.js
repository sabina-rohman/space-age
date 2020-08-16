import React, { Component } from 'react';
import './App.css';
import PlanetList from './PlanetList';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="App">
       <PlanetList />
      </div>
    )
  }
}

export default App;
