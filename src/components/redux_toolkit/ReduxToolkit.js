import React,{useState} from "react";
import Counter from "./Counter";
import Books from "./Books";
import Students from "./Students";
import UserLogin from "./UserLogin";
import RTKQuery from "./RTKQuery";
const ReduxToolkit = () => {

  return(
  	<div>
          <h2>Redux Toolkit</h2>
          <Counter/>
       <br/>
          <Books/>
       <br/>
          <Students/>   
	       <br/>
         <UserLogin/> 
        <br/>
        <RTKQuery/> 
  	</div>
  	)
}
export default ReduxToolkit;