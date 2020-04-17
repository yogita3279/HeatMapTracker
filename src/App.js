import React, { Component } from "react";
import Map from './components/HeatMapWithGoogleMap';
import './styles/Style.css'
import Header from './components/Header';
import Modal from './components/Modal';

const data = [
  { lat: 47.6062095,lng: -122.3320708,weight: 0.5 },
  { lat: 47.619106,lng: -122.1913479,weight: 5 },
  { lat: 47.332842, lng: -122.608,weight: 7 },
    { lat: 47.330228, lng: -122.606,weight: 2 },
  { lat: 47.330169, lng: -122.606,weight:1},
  { lat: 47.330066, lng: -122.6066700000001,weight: 0.5 },

];
class App extends Component {

  render(){

    return(
    <div>
      <Header/>
      <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e); // define show modal function
          }}
        >open Me</button>
      <Modal />
      <div class="map">
        <Map center={{ lat: 47.333, lng: -122.606 }} zoom={14} positions={data}></Map>
      </div>
    </div>

    )
  }
 
}

export default App;