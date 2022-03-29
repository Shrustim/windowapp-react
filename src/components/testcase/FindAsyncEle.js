import React, { useState,useEffect } from 'react';
import axios from 'axios';
export default function FindAsyncEle() {
    const [pokemons,setPokemons]=useState([]);
    useEffect(()=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        const Pokemons = res.data.results;
        setPokemons(Pokemons);
      })
    },[]);
  return (
    <div>
        <h3>* <u>Finding Async Elements with FindBy and Mocking requests</u></h3>

       {pokemons.length > 0
       ? 
        
            pokemons.map((e,i)=>{
                return(
                    <div data-testid={`pokemon-test-${i}`} key={i}>
                       <h4>{e.name}</h4>
                    </div>
                )
            })
        
       :null}
    </div>
  )
}
