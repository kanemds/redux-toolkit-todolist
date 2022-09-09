import express from 'express'

import { getRequest, postRequest, deleteRequest, putRequest } from '../controlers/requests.js'

const router = express.Router()

router.get('/', getRequest)

router.post('/', postRequest)

router.delete('/:id', deleteRequest)

router.put('/:id', putRequest)

export default router