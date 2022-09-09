import express from 'express'
import { getRequest } from '../controlers/requests.js'

const router = express.Router()

router.get(
  '/', getRequest
)

export default router