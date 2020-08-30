import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './screens.css';

//import assets
import SummerImg from '../assets/summer.png';
import Logo from '../assets/logo.png';


class Summer extends Component {
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
              
                Summer
                <div style={{fontFamily:"Poppins", lineHeight:"100%", fontSize:"3vh", marginTop: "5%", color:'#92DACC'}}>
                Recreate a better summer using photos from your Summer 2020
                </div>
                <div style={{ marginRight:"5%"}}>
                
                <Link to="/s"><button type="primary"  style={{backgroundColor:"#92DACC", height:"7.5vh", width: "25vh", marginLeft:"2%", border:"none", borderRadius:20, color:'white', fontFamily:'Roboto', fontSize:'2.5vh'}}> Get Started </button></Link>
                </div>
                </div>
              <div style={{float: "right", marginTop:'10%', marginRight:'1%'}}><img src={SummerImg} alt="home" height="600vh"></img></div>
            </div>
         </div>   
        );
    }
}

export default Summer;