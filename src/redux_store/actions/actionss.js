import { createAction } from '@reduxjs/toolkit'
export const addStudent_Action = createAction('ADD_STUDENT');
export const editStudent_Action = createAction('EDIT_STUDENT', function prepare(data) {
  return {
    payload: data
  }
})
export const removeStudent_Action = createAction('REMOVE_STUDENT');