import express from 'express'
import { Todo } from '../models/todo.js'
import { getRequest } from '../controlers/requests.js'

const router = express.Router()

router.get(
  '/', getRequest
)

export default router