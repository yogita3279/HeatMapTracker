import React from 'react';
import './Modal.css'
import PropTypes from "prop-types";
import ReactBootstrap, {Nav,Button} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";


export default class ModalTemplate extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:{
        zipcode:'',
        count:0
      }
    }
  }
  onClose = (event) => {
    this.props.onClose && this.props.onClose(event);
    
  }

  // need to create these api
  /*save your report to db and update db*/
  saveReport=()=>{
    alert("Your report is successfully submitted !!")
  }
  
  /*add covid Patient api*/
  addCovidPatient =(data)=>{
     if (addPatient>=0){
    return addPatient++;
    }
    console.log(addPatient)
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
  
    return (
      <div id="modal" >
      <Modal.Dialog >
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
        <Button  variant="success" onClick={this.saveReport} >
          Report
        </Button>
      </ModalFooter>
      </Modal.Dialog>

    </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
