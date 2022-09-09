import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  addTodoStatus: '',
  addTodoError: '',
  getTodoStatus: '',
  getTodoError: '',
  updateTodoStatus: '',
  updateTodoError: '',
  deleteTodoStatus: '',
  deleteTodoError: '',

}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {

  }
})

export default todosSlice.reducer