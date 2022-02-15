
import React, {useEffect,useState} from "react";
const OneComponent = ({subject}) => {
   
    return (
        <div><h2>Hello this is your lazy load component oneComponent {subject.toUpperCase()}</h2></div>
    )
}
export default OneComponent; 