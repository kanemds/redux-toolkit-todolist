import { Todo } from '../models/todo.js'
import Joi from 'joi'

export const getRequest = async (req, res) => {
  try {
    // .find(). is filtering 
    const all = await Todo.find().sort({ date: -1 })
    res.status(201).json(all)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

export const postRequest = async (req, res) => {

  const schema = Joi.object({
    task: Joi.string().min(3).max(200).required(),
    isComplete: Joi.boolean(),
    date: Joi.date()
  })
  // .options({ abortEarly: false })
  // default as .options({ abortEarly: true }) print the first error messages
  //  .options({ abortEarly: false }) print all the error messages


  // it has 2 arguement {value , error}, since this is an error check no need value
  const { error } = schema.validate(req.body)

  if (error) return res.status(400).json(error.details[0].message)

  const { task, isComplete, date } = req.body

  const todo = new Todo({
    task,
    isComplete,
    date,
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

export const putRequest = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    isComplete: Joi.boolean(),
    date: Joi.date()
  })

  const { error } = schema.validate(req.body)

  if (error) return res.status(400).json(error.details[0].message)
  try {
    const updateTodo = await Todo.findById(req.params.id)

    if (!updateTodo) {
      res.status(404).send('Not Found')
    }
    const { task, isComplete, date } = req.body

    const update = await Todo.findByIdAndUpdate(req.params.id, { task, isComplete, date }, { new: true })
    res.status(201).json(update)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

export const patchRequest = async (req, res) => {
  try {
    const updateTodo = await Todo.findById(req.params.id)

    if (!updateTodo) {
      res.status(404).json('Not Found')
    }

    const isCompleted = await Todo.findByIdAndUpdate(req.params.id, {
      isComplete: !updateTodo.isComplete
    })
    res.status(201).json(isCompleted)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }

}

export const deleteRequest = async (req, res) => {
  try {
    const updateTodo = await Todo.findById(req.params.id)

    if (!updateTodo) {
      res.status(404).json('Not Found')
    }

    const remove = await Todo.findByIdAndDelete(req.params.id)
    res.status(201).json(remove)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}
