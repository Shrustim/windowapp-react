import React,{useState} from "react";
import Counter from "./Counter";
import Books from "./Books";
import Students from "./Students";
const ReduxToolkit = () => {

  return(
  	<div>
          <h2>Redux Toolkit</h2>
          <Counter/>
       <br/>
          <Books/>
       <br/>
          <Students/>   
	        
  	</div>
  	)
}
export default ReduxToolkit;