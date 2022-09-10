import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseURL = 'http://localhost:5001/'

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

export const todosAdd = createAsyncThunk('todos/todosAdd', async (todo, { rejectWithValue }) => {
  try {
    const response = await axios.post(baseURL, todo)
    console.log(response.data)
    return response.data

  } catch (error) {

    // rejectWithValue is action.payload when error eccour
    return rejectWithValue(error.response?.data)
  }

})


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {
    [todosAdd.pending]: (state, action) => {
      return {
        ...state,
        addTodoStatus: 'pending',
        addTodoError: '',
        getTodoStatus: '',
        getTodoError: '',
        updateTodoStatus: '',
        updateTodoError: '',
        deleteTodoStatus: '',
        deleteTodoError: '',
      }
    },
    [todosAdd.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        addTodoStatus: 'success',
        addTodoError: '',
        getTodoStatus: '',
        getTodoError: '',
        updateTodoStatus: '',
        updateTodoError: '',
        deleteTodoStatus: '',
        deleteTodoError: '',
      }
    },
    [todosAdd.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: 'rejected',
        addTodoError: action.payload,
        getTodoStatus: '',
        getTodoError: '',
        updateTodoStatus: '',
        updateTodoError: '',
        deleteTodoStatus: '',
        deleteTodoError: '',
      }
    }
  }
})

export default todosSlice.reducer