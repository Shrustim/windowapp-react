import React,{useState,useEffect} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const DetailComponent = props => {
  const data = props.dataItem.cities;
console.log(props);
const entries = Object.entries(data);
const newData = entries.map((key)=> ({"name": key[0]}) );

console.log(newData);
  if (newData) {
    return <Grid data={newData}>
            <Column field="name" title="Cities" />
          </Grid>;
  }

  return <div style={{
    height: "50px",
    width: '100%'
  }}>
        <div style={{
      position: 'absolute',
      width: '100%'
    }}>
          <div className="k-loading-image" />
        </div>
      </div>;
};

export default function Task2() {
    const [stateList, setStateList] = useState([]);

    useEffect(()=>{
        fetch("https://api.npoint.io/2c71ded6354de7428006")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(typeof result)
            const entries = Object.entries(result);

            console.log(entries);
            const newData = entries.map((key)=>  key[1] );
            console.log(newData);
            setStateList(newData)

        },
        (error) => {
        }
      )
    },
    
    [])

  const expandChange = event => {
            event.dataItem.expanded = event.value;
            let stateName = event.dataItem.name;
            console.log(stateName);
            setStateList([...stateList]);

            if (!event.value || event.dataItem.details) {
             return;
            }
            let data = stateList.slice();
            let index = data.findIndex(d => d.name === stateName);
            console.log("dataaa",index);
            data[index].details = stateList[index].cities;
            setStateList(data);

   
  };

  return <div style={{padding: "84px"}}>
        
        <Grid style={{height: '550px'}} data={stateList} detail={DetailComponent}  expandField="expanded" onExpandChange={expandChange}>
          <Column field="name" title="ID" width="50px" />
          <Column field="name" width="300px" title="State Name" />
        </Grid>
      </div>;
};