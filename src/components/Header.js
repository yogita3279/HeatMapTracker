import React ,{useState, Component}from 'react';
import ReactBootstrap, {Navbar,Nav,} from 'react-bootstrap';
import ModalTemplate from './Modal'
class Header extends Component{
constructor(props){
    super(props)
    this.state={
        show:false
    }
}

showModal = (event) => {
    this.setState({
      show:!this.state.show
    });
    console.log("Value" +""+this.state.show)
  };
render(){
    return (
       <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">CovidTracker</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link  data-toggle="modal" data-target="#myModal" onClick={e => {
              this.showModal();
         }}>Self Report</Nav.Link>  
      </Nav>
      </Navbar>
         <div>
         <ModalTemplate  id="myModal" onClose={this.showModal} show={this.state.show} />
         </div>
       </div>

    )
        }
}
export default Header;