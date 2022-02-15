import React,{useRef,forwardRef} from "react";
const ChildComponent = forwardRef((props,ref) =>{
    return(
        <div>
            <label>Input from Child Component:</label> <br/>
          <input type="text" ref={ref} />
        </div>
    )
}); 
const ForwardingRefs = () => {
    const InputRef = useRef(null);
    return (
        <div>
            <h2>Forwarding refs to DOM components</h2>
            <ChildComponent ref={InputRef}/>
            <br/>
             <button type="button" onClick={()=>{InputRef.current.focus()}}>Focus the input from parent component</button>
        </div>
    );
}
export default ForwardingRefs;