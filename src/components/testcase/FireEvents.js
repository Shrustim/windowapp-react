import React,{useState} from "react";
const FireEvents = () => {
	const [ name, setName ] = useState(""); 
	return(

           <div>
               <label htmlFor="namee" style={{padding:"10px"}}> Name: </label>
               <input id="namee" 
                   onChange={(e) => {
                   	setName(e.target.value)
                   }}
	               placeholder="Enter here name" 
	               style={{height:"50px",width:"300px",padding:"10px"}} 
	               value={name} 
	            />

	            <button type="button"  
	            style={{margin:"10px" , padding:"10px"}}
                  onClick={() => {
                  	setName("")
                  }}
	            > Empty</button>

           </div>
		)
}
export default FireEvents;