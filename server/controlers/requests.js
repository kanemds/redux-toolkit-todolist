import { Todo } from '../models/todo.js'
import Joi from 'joi'

export const getRequest = async (req, res) => {
  res.send('hello world')
}

export const postRequest = async (req, res) => {

  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3).max(30).required(),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date()
  })
  // .options({ abortEarly: false })
  // default as .options({ abortEarly: true }) print the first error messages
  //  .options({ abortEarly: false }) print all the error messages


  // it has 2 arguement {value , error}, since this is an error check no need value
  const { error } = schema.validate(req.body)

  if (error) return res.status(400).json(error.details[0].message)

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
