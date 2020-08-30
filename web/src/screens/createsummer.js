import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './screens.css';

//import assets
import UploadImg from '../assets/upload.png';
import FolderImg from '../assets/folder.png';
import Logo from '../assets/logo.png';


class Csummer extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: '', imageLoaded: null};
      }
    
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result,
            imageLoaded:'true'
          });
        }
    
        reader.readAsDataURL(file)
      }
    
    render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} height='400vh' />);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }
        return (
         <div>
            <div>
              
            </div>
            <div>
              <div style={{margin:"5vh 2.5%",fontFamily:"Roboto", fontSize:"3vh",lineHeight:"100%", color:"#4A73B1", width:"41.7%", float: "left"}}>
                Step 1:<span style={{fontFamily:'Poppins'}}> Upload an image from a summer you’d like to go back to</span>
                {this.state.imageLoaded== null  &&
               <div><img src={UploadImg} alt="home" height="300vh" style={{marginTop:'15%'}}></img></div> }
               {this.state.imageLoaded &&
                <div style={{marginTop:'5%'}}>{$imagePreview}</div>}
                <div style={{ marginTop:"10%"}}>
                <form onSubmit={(e)=>this._handleSubmit(e)}>
             <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
                <button type="submit" onClick={(e)=>this._handleSubmit(e)} style={{backgroundColor:"#92DACC", height:"7.5vh", width: "25vh", marginLeft:"2%", border:"none", borderRadius:20, color:'white', fontFamily:'Roboto', fontSize:'2.5vh'}}> Upload </button>
               </form>
                </div>
                </div>
                <div style={{margin:"5vh 2.5%",fontFamily:"Roboto", fontSize:"3vh",lineHeight:"100%", color:"#4A73B1", width:"41.7%", float: "right"}}>
              Step 2:<span style={{fontFamily:'Poppins'}}> Upload a folder containing photos from your Summer 2020</span>
               <div><img src={FolderImg} alt="home" height="300vh" style={{marginTop:'15%'}}></img></div> 
                
                <div style={{ marginTop:"10%"}}>
                
                <Link to="#"><button type="primary"  style={{backgroundColor:"#92DACC", height:"7.5vh", width: "25vh", marginLeft:"2%", border:"none", borderRadius:20, color:'white', fontFamily:'Roboto', fontSize:'2.5vh'}}> Upload </button></Link>
                </div>
              </div>
              
            </div>
            <Link to="p"><button  style={{backgroundColor:"#4A73B1", height:"7.5vh", width: "25vh", marginLeft:"-9%", marginTop:'42.5%', border:"none", borderRadius:20, color:'white', fontFamily:'Roboto', fontSize:'2.5vh'}}>Recreate</button></Link>
         </div>   
        );
    }
}

export default Csummer;