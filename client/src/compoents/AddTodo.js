import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { todosAdd } from '../features/todosSlice'

const AddTodo = () => {

  const dispatch = useDispatch()

  const [todo, setTodo] = useState({
    task: '',
    isComplete: false
  })

  const handleSubmit = e => {
    e.preventDefault()


    dispatch(todosAdd(todo))

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
          Add Task
        </Button>
      </form>
    </>
  )
}

export default AddTodo