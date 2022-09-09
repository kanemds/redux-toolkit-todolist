import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosSlice';

const store = configureStore({
  reducer: {
    todosState: todosReducer
  }
})

export default store