import express from 'express'

import { getRequest, postRequest, deleteRequest } from '../controlers/requests.js'

const router = express.Router()

router.get('/', getRequest)

router.post('/', postRequest)

router.delete('/:id', deleteRequest)

export default router