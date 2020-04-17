import React from 'react';
import ReactBootstrap, {Navbar,Nav} from 'react-bootstrap'


function Header(){

    return (
       <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">CovidTracker</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="#" id="self">Self Report</Nav.Link>  
      <Nav.Link href="#" id="self">Self Report</Nav.Link>  
      </Nav>
      </Navbar>
       </div>

    )
}
export default Header;