import React,{useState} from "react"
import { useGetPokemonByNameQuery ,useGetPokemonsQuery } from '../../redux_store/services/pokeRTK';

const ParticularPokemon =  (props) => {
     const { data, error, isLoading } = useGetPokemonByNameQuery(props.name)
    return ( <>
     {error ? (
        <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (
            <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
            </>
        ) : null} 
        </>
   )
}

const RTKQuery = () => {
     // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonsQuery("hvh");
  const [ pokeName,setPokeName] = useState("bulbasaur");
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  
   return (
       <div>
           <h1>React Redux Toolkit's "RTK Query"</h1>
           <ParticularPokemon name={pokeName}  />

{error ? (
                <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                    {
                        data.results.map((e) => {
                            return <h3 onClick={() => setPokeName(e.name)} >{e.name}</h3>
                        })
                    }
                   
                     </>
                ) : null}

       </div>
   )
}
export default RTKQuery;