import React, { useState } from 'react'
import { Button, Alert, CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { todosAdd, updateTodo } from '../features/todosSlice'

const AddTodo = ({ todo, setTodo }) => {

  const dispatch = useDispatch()
  const todosState = useSelector((state) => state.todosState)


  const handleSubmit = e => {
    e.preventDefault()

    if (todo._id) {
      dispatch(updateTodo(todo))
    } else {
      const newTodo = {
        ...todo,
        date: new Date()
      }
      dispatch(todosAdd(newTodo))
    }


    setTodo({
      task: '',
      isComplete: false
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='What would you like to do today'
          value={todo.task}
          onChange={e => setTodo({ ...todo, task: e.target.value })}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fontFamily: "'Abel', 'sansSerif'",
          }}
        >
          {
            todosState.addTodoStatus === 'pending' ? (
              <CircularProgress size={24} color='secondary' />
            ) : todo.id ? ('Update Task') : (
              'Add Task'
            )
          }
        </Button>
        {todosState.addTodoStatus === 'rejected' ? (
          <Alert severity='error'> {todosState.addTodoError}</Alert>
        ) : null}
        {todosState.addTodoStatus === 'success' ? (
          <Alert severity='success'> Task Added </Alert>
        ) : null}
        {todosState.updateTodoStatus === 'rejected' ? (
          <Alert severity='error'> {todosState.updateTodoError}</Alert>
        ) : null}
        {todosState.updateTodoStatus === 'success' ? (
          <Alert severity='success'> Task Updated </Alert>
        ) : null}
        {todosState.deleteTodoStatus === 'rejected' ? (
          <Alert severity='error'> {todosState.deleteTodoError}</Alert>
        ) : null}
        {todosState.deleteTodoStatus === 'success' ? (
          <Alert severity='warning'> Task Deleted </Alert>
        ) : null}
      </form>
    </>
  )
}

export default AddTodo