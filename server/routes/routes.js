import express from 'express'

import { getRequest, postRequest } from '../controlers/requests.js'

const router = express.Router()

router.get('/', getRequest)

router.post('/', postRequest)

export default router