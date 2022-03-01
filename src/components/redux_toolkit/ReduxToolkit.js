import React,{useState} from "react";
import Counter from "./Counter";
import Books from "./Books";

const ReduxToolkit = () => {

  return(
  	<div>
          <h2>Redux Toolkit</h2>
          <Counter/>
       <br/>
          <Books/>
	        
  	</div>
  	)
}
export default ReduxToolkit;