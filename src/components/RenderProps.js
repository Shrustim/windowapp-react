import React ,{useState} from 'react'

const ClickCounter = ({count,incrementCount}) => {
    // const [count,setCount]=useState(0)
    return(
       <div><h3>Click counter</h3>
       <button type="button" onClick={() => {incrementCount()}}>Click {count} times</button></div>
    )
}

const HoverCounter = ({count,incrementCount}) => {
    // const [count,setCount]=useState(0)
    return(
       <div><h3>Hover counter</h3>
       <div   onMouseOver={() => {incrementCount()}}>Hover {count} times</div></div>
    )
}
const Counter = (props) =>{
    console.log("counter props",props);
    const [count,setCount]=useState(0)
    const incrementCounts = () => {
        setCount(count+ 1)
    }
    return (
        <div>
            {props.render(count,incrementCounts)}
        </div>
    )
}
const User = ({render}) => {
    
    return(
        <div>
          
         <h2>User: {render(true)}</h2>
        </div>
    )
}
export default function RenderProps() {
    //step 1 - when counter component call pass props render method with count and increatemCounts parameter
    //step 2 - in counter component call the props.render method with parameter
    //step 3 - get those parameter pass to clickCouter component as props 

  return (
    <div>
        <h2>RenderProps</h2>
        <Counter render={(count, incrementCounts) => (
            <ClickCounter count={count} incrementCount={incrementCounts}  />
        )}/>
        <Counter render={(count, incrementCounts) => (
            <HoverCounter count={count} incrementCount={incrementCounts}  />
        )}/>
        {/* <ClickCounter/>
        <HoverCounter /> */}
        {/* pass function through props */}
        <User render={(isLoggedIn) => 
            isLoggedIn ? "Shrushti mane" : "Guest"
        } />

    </div>
  )
}
