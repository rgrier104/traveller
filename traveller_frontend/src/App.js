import React, { Component } from 'react';
import TripsContainer from './containers/TripsContainer';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://127.0.0.1:3000/api/v1/trips')
      .then(resp => resp.json())
      .then(json => console.log(json))
    
  }

  render() {
    return (
      <div className="App">
        <TripsContainer />
      </div>
    );
  }
 
}

export default App;
