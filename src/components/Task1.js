import React,{useState,useEffect} from 'react'
import '@progress/kendo-theme-default/dist/all.css';
const City = ({cities,IsOpen}) => {
    console.log(cities);
    return (
        <div style={IsOpen ? {display:"block" ,border: "1px solid",padding: "10px"}: {display:"none"}}>
            { Object.keys(cities).map((key) =>{
                return (
                    <h4>{key}</h4>
                )
            })}
                              
                                 
        </div>
    )
}

const States = ({statename,cities}) => {
    const [Isopen,setIsOpen] = useState(false);
    return(
        <div><h3 style={{border: "1px solid",padding: "10px"}} onClick={() => {setIsOpen(Isopen ? false :true )}} >{ statename} </h3>
        <City cities={cities} IsOpen={Isopen} />
   </div>
    );
}
export default function Task1() {
    const [stateList, setStateList] = useState([]);

    useEffect(()=>{
        fetch("https://api.npoint.io/2c71ded6354de7428006")
      .then(res => res.json())
      .then(
        (result) => {
            setStateList(result)
            console.log(typeof result)

            console.log(result, Object.keys(result).length);
        },
        (error) => {
        }
      )
    },
    
    [])
    console.log("stateList",stateList,stateList.length);
    

  return (
    <div style={{padding: "20px"}}>Task1

            <div style={{width: "700px"}}>
                <h1>States</h1>
                {stateList ? 
                
                Object.keys(stateList).map((key) =>
                {
                    return(  <States statename={stateList[key].name} cities={stateList[key].cities} />                            
                             )
                } )
                       
                
            : null}
             
            </div>

    </div>
  )
}
