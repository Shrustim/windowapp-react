import {  createReducer,createAction } from '@reduxjs/toolkit';

const initialState =  [];

 const studentReducer = 	createReducer(initialState, (builder) => {
	builder.addCase("ADD_STUDENT",(state, action) => {
         return [...state,action.payload]
	})
	.addCase("EDIT_STUDENT",(state, action) => {
         const newData = state;
	     const index = newData.indexOf(action.payload.currentBook);
	     newData[index]=action.payload.updatedBook;
        return newData;
    })
	.addCase("REMOVE_STUDENT",(state, action) => {
        const newData = state.filter((e) => {
	        if(e !== action.payload){
	           return e
	        }
	      })
        return [...newData]
     })
});

 export default studentReducer;