import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './screens.css';

//import assets
import HackathonImg from '../assets/hackathon.png';



class Hackathon extends Component {
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
              
                Hackathon
                <div style={{fontFamily:"Poppins", lineHeight:"100%", fontSize:"3vh", marginTop: "5%", color:'#E14B5A'}}>
                Let’s take a look back at your summer 2020 hackathons
                </div>
                <div style={{ marginRight:"5%"}}>
                <Link to="/organizer"><button type="primary" style={{backgroundColor:"#4A73B1", height:"7.5vh", width: "25vh", border:"none", borderRadius:20, color:'white', fontFamily:'Roboto',  fontSize:'2.5vh'}}> Organizer Edition </button></Link>
                <Link to="/hacker"><button type="primary"  style={{backgroundColor:"#E14B5A", height:"7.5vh", width: "25vh", marginLeft:"2%", border:"none", borderRadius:20, color:'white', fontFamily:'Roboto', fontSize:'2.5vh'}}> Hacker Edition </button></Link>
                </div>
                </div>
              <div style={{float: "right", marginTop:'10%', marginRight:'1%'}}><img src={HackathonImg} alt="home" height="600vh"></img></div>
            </div>
         </div>   
        );
    }
}

export default Hackathon;