import { Todo } from '../models/todo.js'

export const getRequest = async (req, res) => {
  res.send('hello world')
}

export const postRequest = async (req, res) => {

  const { name, author, isComplete, date, uid } = req.body

  const todo = new Todo({
    name,
    author,
    isComplete,
    date,
    uid
  })
  try {
    await todo.save()
    res.status(201).json(todo)
  }
  catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}
