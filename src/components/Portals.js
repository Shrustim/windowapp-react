import React,{useState} from "react";
import ReactDOM from "react-dom";
const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex:1
}
const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex:2,
    backgroundColor: "red",
    padding: '10px'
}
const MODAL_STYLE = {
    position: 'fixed',
    top:"50%",
    left:"50%",
    transfrom:"translate(-50%,50%)",
    backgroundColor:"#fff",
    padding:'50px',
    zIndex:1000
}
const OVERLAY_STYLE = {
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0, 0, 0, .7)',
    zIndex:1000
}
const Models = ({children,isOpen,Close}) => {
    if(!isOpen) {
        return null;
    } 
    return ReactDOM.createPortal(
        <>
        <div style={OVERLAY_STYLE} onClick={Close} />
        <div style={MODAL_STYLE}>
              <button type="button"  onClick={Close}>Close Model</button>
              {children}
        </div>
       
        </>,document.getElementById('portal')
    )
  
}

const Portals = () => {
    const [isOpen,setOpen] =useState(false);
    return(
        <div>
             <h2>Portals</h2>
            <div style={BUTTON_WRAPPER_STYLES}>
           
            <button type="button" onClick={()=>{setOpen(true)}}>Open Model</button>

         <Models isOpen={isOpen} Close={()=>{setOpen(false)}}>
             <div >
               
                 <h4>I am a model</h4>
             </div>
         </Models>
         </div>
         <div style={OTHER_CONTENT_STYLES}><h4>other content</h4></div>
        </div>
    )
}
export default Portals;