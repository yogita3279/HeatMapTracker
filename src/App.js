import React, { Component } from "react";
import Map from './components/HeatMapWithGoogleMap';
// import { Router, browserHistory, Route, IndexRedirect } from 'react-router'
import Modal from './components/Modal'
import ReactBootstrap, {Nav} from 'react-bootstrap';
import './styles/Style.css'
import Header from './components/Header';
import Axios from 'axios';

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
   super(props);
   this.state={
     data:'',
     geoData:[]
       }
 

  }
// componentDidMount (){
//   Axios.get('http://localhost:5000/express_backend/').then(response=>{console.log(response)
//   let location= response.data.data.casesByState;
//   console.log("LOC"+""+location.length);


//   for(let i=0;i<=location.length-1;i++){
//     this.state.geoData= location[i].location;
//     console.log("LOCATION"+""+JSON.stringify( this.state.geoData));
//     this.setState({data:(response)?(JSON.stringify( this.state.geoData)):''})

//   }
  
// }).
//   catch(error=>{console.log(error)});

// }

  render(){
    // console.log("MyData"+''+this.state.data)
    return(
    <React.Fragment>
      <Header/>
      <p className="App-intro"></p>
       <div className="map">
        <Map center={{ lat: 47.333, lng: -122.606 }} zoom={14} positions={data}>
        </Map>
      </div>
      {/* <Router history={browserHistory}>
      <Route path="/">
          <IndexRedirect to="/posts"/>
      </Route>
      <Route path="/posts/save" component={Modal}/>
    </Router> */}
    </React.Fragment>

    )
  }
 
}

export default App;