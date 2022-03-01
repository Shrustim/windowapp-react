import React,{useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addBooks,deleteBooks,editBooks } from '../../redux_store/features/booksSlice';

const BookShow = ({bookname}) => {
	const dispatch = useDispatch();
	const [editFlag,setEditFlag] = useState(false);
	const [editCurrentBookName,setCurrentBookName] = useState("");
	const [editBookName,setEditBookName] = useState("");
	return(
            <>
                     <li>
                      {editFlag 
                      	? 
                      	<>
				 			<input type="text" onChange={(e) => {setEditBookName(e.target.value)}} value={editBookName}  />
				            <button type="button" onClick={() =>{ dispatch(editBooks({"currentBook":editCurrentBookName,"updatedBook":editBookName})); setEditFlag(false)}} style={{marginLeft:"10px"}}> Edit Book</button>
				             <button type="button" onClick={() =>{ setEditFlag(false)}} style={{marginLeft:"10px"}}>Cancel</button>
				            
                        </>
                        :
                      <><label>{bookname} </label> 
                      <span style={{color: "red",paddingLeft: "10px"}} onClick={() => { setEditFlag(true);setEditBookName(bookname);setCurrentBookName(bookname)}}>edit</span>  
                     </>}
                      <span onClick={()=>{dispatch(deleteBooks(bookname))}} style={{color: "red",paddingLeft: "10px"}}>Delete</span></li>
              
            </>
		);
}
const Books = () => {
	const books = useSelector((state) => state.book);
    const dispatch = useDispatch();
	const [bookName,setBookName] = useState("");
	const addBook = () => {
		console.log("Bookname",bookName);
		dispatch(addBooks(bookName))
		console.log("books",books);
	}
	
	return(
        <div>
            <h2>Books</h2>
            <label>Book Name</label><br/>
            <input type="text" onChange={(e) => {setBookName(e.target.value)}}  />
            <button type="button" onClick={() => addBook()} style={{marginLeft:"10px"}}> Add Book</button>
           <br/><br/>
            <ul>
            {books.map((e) => {
            	return(
                    <BookShow bookname={e}/>
              	)
            })
            }
            </ul>
        </div>
		);
}

export default Books;