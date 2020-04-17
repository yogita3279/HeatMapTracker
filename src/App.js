import React, { Component } from "react";
import Map from './components/HeatMapWithGoogleMap';
import ReactBootstrap, {Nav} from 'react-bootstrap';
import './styles/Style.css'
import Header from './components/Header';

const data = [
  { lat: 47.6062095,lng: -122.3320708,weight: 0.5 },
  { lat: 47.619106,lng: -122.1913479,weight: 5 },
  { lat: 47.332842, lng: -122.608,weight: 7 },
    { lat: 47.330228, lng: -122.606,weight: 2 },
  { lat: 47.330169, lng: -122.606,weight:1},
  { lat: 47.330066, lng: -122.6066700000001,weight: 0.5 },

];
class App extends Component {

  constructor(props){
   super(props)

  }



  render(){

    return(
    <div>
      <Header/>
 
      <div class="map">
        <Map center={{ lat: 47.333, lng: -122.606 }} zoom={14} positions={data}>
        </Map>
      </div>
    </div>

    )
  }
 
}

export default App;