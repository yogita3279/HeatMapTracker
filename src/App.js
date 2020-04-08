import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
      </header>
      <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'TOKEN HERE'
})(App);
