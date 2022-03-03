import React,{useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
const StudentShow = ({studentname}) => {
	const dispatch = useDispatch();
	const [editFlag,setEditFlag] = useState(false);
	const [editCurrentStudentName,setCurrentStudentName] = useState("");
	const [editStudentName,setEditStudentName] = useState("");
	return(
            <>
                     <li>
                      {editFlag 
                      	? 
                      	<>
				 			<input type="text" onChange={(e) => {setEditStudentName(e.target.value)}} value={editStudentName}  />
				            <button type="button" onClick={() =>{ dispatch(
				            	{
				            		type:"EDIT_STUDENT",
				            		payload:
				            		           {"currentStudent":editCurrentStudentName,
				            		           "updatedStudent":editStudentName
				            		           }
				            		        
				                } ); setEditFlag(false)}} style={{marginLeft:"10px"}}> Edit Student</button>
				             <button type="button" onClick={() =>{ setEditFlag(false)}} style={{marginLeft:"10px"}}>Cancel</button>
				            
                        </>
                        :
                      <><label>{studentname} </label> 
                      <span style={{color: "red",paddingLeft: "10px"}} onClick={() => { setEditFlag(true);setEditStudentName(studentname);setCurrentStudentName(studentname)}}>edit</span>  
                     </>}
                      <span onClick={()=>{dispatch({type:"REMOVE_STUDENT",payload:studentname})}} style={{color: "red",paddingLeft: "10px"}}>Delete</span></li>
              
            </>
		);
}
const Students = () => {
	const students = useSelector((state) => state.students);
    const dispatch = useDispatch();
	const [studentName,setStudentName] = useState("");
	const addStudent = () => {
		console.log("Studentname",studentName);
		//dispatch(addStudents(studentName))
		dispatch({type:"ADD_STUDENT",payload:studentName })
		console.log("students",students);
	}
	
	return(
        <div>
            <h2>Students</h2>
            <label>Student Name</label><br/>
            <input type="text" onChange={(e) => {setStudentName(e.target.value)}}  />
            <button type="button" onClick={() => addStudent()} style={{marginLeft:"10px"}}> Add Student</button>
           <br/><br/>
            <ul>
            {students.map((e) => {
            	return(
                      <StudentShow studentname={e}/>
              	)
            })
            }
            </ul>
        </div>
		);
}

export default Students;