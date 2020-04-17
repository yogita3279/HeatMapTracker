import React from 'react';
import './Modal.css'
import PropTypes from "prop-types";
import ReactBootstrap, {Nav,Button} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import "bootstrap/dist/css/bootstrap.min.css";


export default class ModalTemplate extends React.Component {
  onClose = (event) => {
    this.props.onClose && this.props.onClose(event);
    
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div id="modal">
       
      <ModalHeader>
        <ModalTitle>Report Your Condition</ModalTitle>
      </ModalHeader>
      <ModalBody>
      <Button className="button color-red">
          Having Covid Symptoms
        </Button>
        <Button className="button color-green">
          Feeling Better
        </Button>
      </ModalBody>
      <ModalFooter>
      <Button  onClick={this.onClose}>
          close
        </Button>
        <Button  >
          Save
        </Button>
      </ModalFooter>
    </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
