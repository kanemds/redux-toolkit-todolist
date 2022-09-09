import express from 'express'

import { getRequest, postRequest, deleteRequest, putRequest, patchRequest } from '../controlers/requests.js'

const router = express.Router()

router.get('/', getRequest)

router.post('/', postRequest)

router.delete('/:id', deleteRequest)

router.put('/:id', putRequest)

router.patch('/:id', patchRequest)

export default router