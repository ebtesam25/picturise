import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './screens.css';

//import assets
import LandImg from '../assets/landing.png';
import Logo from '../assets/logo.png';


class Landing extends Component {
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
              <img src={Logo} height="70vh" width="70vh" style={{ marginRight:'2.5%'}}></img>
                Picturise
                <div style={{fontFamily:"Poppins", lineHeight:"100%", fontSize:"3vh", marginTop: "5%", color:'#E14B5A'}}>
                Take a look back and recreate your Summer 2020
                </div>
                <div style={{ marginRight:"5%"}}>
                <Link to="/summer"><button type="primary" style={{backgroundColor:"#4A73B1", height:"7.5vh", width: "25vh", border:"none", borderRadius:20, color:'white', fontFamily:'Roboto',  fontSize:'2.5vh'}}> Summer Edition </button></Link>
                <Link to="/hackathon"><button type="primary"  style={{backgroundColor:"#E14B5A", height:"7.5vh", width: "25vh", marginLeft:"2%", border:"none", borderRadius:20, color:'white', fontFamily:'Roboto', fontSize:'2.5vh'}}> Hacker Edition </button></Link>
                </div>
                </div>
              <div style={{float: "right", marginTop:'10%', marginRight:'1%'}}><img src={LandImg} alt="home" height="600vh"></img></div>
            </div>
         </div>   
        );
    }
}

export default Landing;