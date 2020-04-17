import React from "react";
import  {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
 
const CovidTracker= (props)=>{
   console.log("PROPS"+ ""+ props);

return(

   <div >
    
        <Nav.Link href="#home" id="heatMap"  onClick={props.getCovidData} >Show status</Nav.Link>
     
</div>
   )

}
export default CovidTracker