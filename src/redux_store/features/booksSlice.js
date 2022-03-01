import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: { 
   
    addBook: (state, action) =>  [...state,action.payload],
    deleteBook: (state, action) => {
      const newData = state.filter((e) => {
        if(e !== action.payload){
           return e
        }
      })
      return [...newData]
    },
    editBook: (state, action) => {
     const newData = state;
     const index = newData.indexOf(action.payload.currentBook);
     console.log("index",index)
     newData[index]=action.payload.updatedBook;
      return newData;
    }  
    ,
  },
})

// Action creators are generated for each case reducer function
export const {   addBook,deleteBook,editBook } = booksSlice.actions
export const addBooks =  (bookname) => (dispatch) => {
     dispatch(addBook(bookname))
  
}

export const deleteBooks =  (bookname) => (dispatch) => {
     dispatch(deleteBook(bookname))
  
}
export const editBooks =  (payload) => (dispatch) => {
     dispatch(editBook(payload))
  
}

export default booksSlice.reducer