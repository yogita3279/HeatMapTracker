import React, { Component } from "react";
import { Map, HeatMap, GoogleApiWrapper ,InfoWindow, Marker, } from "google-maps-react";
import ReactBootstrap, {Navbar,Button,Nav,Form,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import CovidTracker from './components/CovidData';
import Modal from './components/Modal'
import Geocode from "react-geocode";
Geocode.setApiKey( "AIzaSyDeeXSRb_yBsk7t6phbcxKFpVN5GwxteRw" );
Geocode.setRegion("us");
Geocode.enableDebug();
// import ReactGoogleMapLoader from "react-google-maps-loader"


const gradient = [
  "rgba(0, 255, 255, 0)",
  "rgba(0, 255, 255, 1)",
  "rgba(0, 191, 255, 1)",
  "rgba(0, 127, 255, 1)",
  "rgba(0, 63, 255, 1)",
  "rgba(0, 0, 255, 1)",
  "rgba(0, 0, 223, 1)",
  "rgba(0, 0, 191, 1)",
  "rgba(0, 0, 159, 1)",
  "rgba(0, 0, 127, 1)",
  "rgba(63, 0, 91, 1)",
  "rgba(127, 0, 63, 1)",
  "rgba(191, 0, 31, 1)",
  "rgba(255, 0, 0, 1)"
];
 const visible= false;
class MapContainer extends React.Component {
 

  constructor( props ){
		super( props );
		this.state = {
      address: '',
      isOpen: false,
     data:null,
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}
		}
  }
  
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
		Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components;
				   


				this.setState( {
					address: ( address ) ? address : '',
					
				} )
			},
			error => {
				console.error( error );
			}
		);
	};
	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate( nextProps, nextState ){
		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address 
		
		) {
			return true
		} else if ( this.props.center.lat === nextProps.center.lat ){
			return false
		}
	}
	
	/**
	 * And function for city,state and address input
	 * @param event
	 */
	onChange = ( event ) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = ( event ) => {

  };
  /**
   * 
   * @param event
   */
	 

	onMarkerDragEnd = ( event ) => {
		let newLat = event.latLng.lat(),
		    newLng = event.latLng.lng();

		Geocode.fromLatLng( newLat , newLng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components;
				      
				this.setState( {
					address: ( address ) ? address : '',
					
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				} )
			},
			error => {
				console.error(error);
			}
		);
	};



  async getCovidData(){

    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/united_states_cases.php", {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "782b389fe2msh881b0c8da5a1df2p1504b5jsnb451719e87ac" // don't forget to place your key here or the code will not work
      }
  })
  .then(response => response.json().then(data => {
      console.log(data);
  }))
  .catch(err => {
      console.log(err);
  });
  
}

showHeatMap =(props)=>{
this.state.heatMapVisible=true
  console.log("I am click", this.state.heatMapVisible);

  return   <h1></h1>   

     
 
}
  
  render() {
    const { position } = this.state;

    return (

      <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">CovidTracker</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#" id="self">Self Report</Nav.Link>
        <CovidTracker getCovidData={this.getCovidData}/>
      </Nav>
     
    </Navbar>

   <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      
      <div style= {{ marginTop: '10px' }}>

        <div style={{marginBottom: '10px', width:'100%'}}>
      <GooglePlacesAutocomplete
        onSelect={({ description }) => (
        Geocode.fromAddress(description).then(
        response => {
        const { lat, lng } = response.results[0].geometry.location;
        const address=response.results[0].formatted_address
        console.log(lat, lng, address);
        this.setState( {
        address: ( address ) ? description : '',
        markerPosition: {
        lat: lat,
        lng: lng
        },
        mapPosition: {
        lat: lat,
        lng: lng
        },
        } )
        },
        error => {
        console.error(error);
        }
        )
        )}/>
      
     </div>
        
        <Map
          google={this.props.google}
          className={"map"}
          centerAroundCurrentLocation={false}
          Zoom={ this.props.zoom }
          center={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
          onClick={this.onMapClicked}
        >
          {/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
							</div>
						</InfoWindow>
						{/*Marker*/}
						<Marker google={this.props.google}
						        name={'Dolores park'}
						        draggable={true}
						        onDragEnd={ this.onMarkerDragEnd }
						        position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						/>
						<Marker />

                 <HeatMap
                 gradient={gradient}
                 positions={this.props.positions}
                 opacity={1}
                 radius={20}
               /> 


   
        </Map>


        {/* <CovidTracker getCovidData={this.getCovidData}/> */}
    </div>
    </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDeeXSRb_yBsk7t6phbcxKFpVN5GwxteRw",
  libraries: ["visualization","places"]
})(MapContainer);
