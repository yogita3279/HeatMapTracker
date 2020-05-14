import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import PropTypes from "prop-types";
import ReactBootstrap, {Nav,Button,Form} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Axios from 'axios';



export default class ModalTemplate extends React.Component {
  constructor(props){
    super(props);
    this.state={
     
          latitude: "",
          longitude: "", 
          isLoading: false,
          data:''
      
    }
    this.saveReport=this.saveReport.bind(this);
  }


  onClose = (event) => {
    this.props.onClose && this.props.onClose(event);
    
  }

  componentDidMount=()=> {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }

    const positionTimer = navigator.geolocation.watchPosition(
      (position) => {
        // Your success code here
        console.log(position.coords.latitude);
        this.setState({latitude:position.coords.latitude,longitude:position.coords.longitude})
        
      },
      (err) => {
        // Your error code here
        console.log(err);
      },
      {
        // Options here
      }
    )
 
}

  // need to create these api
  /*save your report to db and update db*/
  saveReport=()=>{
    this.setState({ isLoading: true });
    
    console.log("Data"+ this.state.data)
    Axios.post('http://localhost:5000/save', this.state.data, {headers: {'Content-Type': 'application/json' }}
    )
    .then((res) => {
        console.log("Hello"+res)
    }).catch((error) => {
        console.log(error)
    });

this.setState({ data:'' })
    // need to call addCovidPatient method to get data and insert to mongoDB
    alert(`Your report is successfully submitted !! + ${this.state.data}` )
    this.onClose();
  }
  
  /*add covid Patient api*/
  addCovidPatient= ()=>{
    let addPatient=0;
    if (addPatient>=0){
      addPatient++;
     const result=JSON.stringify({ addPatient:addPatient,latitude:this.state.latitude,longitude:this.state.longitude})
      console.log("CovidPatientData"+""+ (result))
      this.setState({data:result})
      return result;      
   }
   
  }

  /*delete covid Patient api*/
  removeCovidPatient=()=>{
    let removePatient=0;
    if (removePatient>=0){
    return removePatient--;
    console.log(removePatient)
    }
    else {
      return;
    }

  }

  render() {
    if (!this.props.show) {
      return null;
    }
  
    return ReactDOM.createPortal (
      <div id="modal" >
      <Modal.Dialog >
        <form onSubmit={this.saveReport} action="/save" method="POST">
      <ModalHeader>
        <ModalTitle>Report Your Condition</ModalTitle>
      </ModalHeader>
      <ModalBody>
     
        <div className="button-area">
      <Button variant="outline-danger" onClick={this.addCovidPatient}>
           Covid Symptoms
        </Button>
        <Button variant="outline-success"  onClick={this.removeCovidPatient}>
          Feeling Better
        </Button>
        </div>
       
      </ModalBody>
      <ModalFooter>
      <Button  variant="danger" onClick={this.onClose}>
          Cancel
        </Button>
        <Button  variant="success" type="submit" value="submit" disabled={this.state.isLoading} >
          Report
        </Button>
      </ModalFooter>
      </form>
      </Modal.Dialog>

    </div>,document.getElementById('modal-root')
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
