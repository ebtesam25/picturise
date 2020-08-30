import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './screens.css';

//import assets
import OrganizerImg from '../assets/organizer.png';



class Organizer extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        return (
         <div>
            <div>
              
            </div>
            <div>
              <div style={{margin:"30vh 2.5%",fontFamily:"Roboto", fontSize:"9.75vh",lineHeight:"100%", color:"#4A73B1", width:"41.7%", float: "left"}}>
              
                Organizer
                <div style={{fontFamily:"Poppins", lineHeight:"100%", fontSize:"3vh", marginTop: "5%", color:'#92DACC'}}>
                Recreate your event logo using photos from your event
                </div>
                <div style={{ marginRight:"5%"}}>
                
                <Link to="/o"><button type="primary"  style={{backgroundColor:"#92DACC", height:"7.5vh", width: "25vh", marginLeft:"2%", border:"none", borderRadius:20, color:'white', fontFamily:'Roboto', fontSize:'2.5vh'}}> Get Started </button></Link>
                </div>
                </div>
              <div style={{float: "right", marginTop:'10%', marginRight:'1%'}}><img src={OrganizerImg} alt="home" height="600vh"></img></div>
            </div>
         </div>   
        );
    }
}

export default Organizer;