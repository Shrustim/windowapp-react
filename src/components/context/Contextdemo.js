
import React,{Component,useContext } from 'react';
import { UserProvider,UserConsumer,UserContext } from './useContext';
import { ThemeProvider,ThemeConsumer } from './themeContext';

class Contextdemo3Class extends Component {
	render() {


		return (  
			    <UserConsumer>
			      {
			      	(username) => {
			      		return <div><h2>Context 3 Class component </h2><h2> - hello  : {username} </h2></div>
			      			
			      	}}
	            
	            </UserConsumer>
			
			)
   }
}

const Contextdemo4Function = () => { 

		return (  
			 <ThemeConsumer>
      {theme => (
			    <UserConsumer>
			      {
			      	(username) => {
			      		return (<div>
					      			<h2>Context 4 Function component</h2>
					      			<h2> - hello  : {username} </h2>
					      			<h2> - theme  : {theme } </h2>
			      			</div>)
			      	}}
	           </UserConsumer>
			           )}
		    </ThemeConsumer>
            )
   
}
const UseContextHook5 = () => {
	 const user = useContext(UserContext);
	return (
		<div>
		   <h2>useContext Hook 5 </h2>
           <h2>- Username: {user}</h2>
		</div>
		)
}

const Contextdemo2 = () => {
	return (
            <div>
                <h2>Context 2</h2>
                <Contextdemo3Class/>
                <Contextdemo4Function/>	
                <UseContextHook5/>
            </div>
		);
}

const Contextdemo1 = () => {
	return (
            <div>
                <h2>Context 1</h2>
                <Contextdemo2/>
            </div>
		);
}
const Contextdemo = () => { 
	
	return (
            <div>
                <h2>Context in react</h2>
                 <ThemeProvider value='black'>
	                <UserProvider value="shrushti">
	                  <Contextdemo1/>
	                </UserProvider>
	             </ThemeProvider>   
            </div>
		);
	
}
export default Contextdemo;