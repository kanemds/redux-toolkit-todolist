import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/routes.js'

const app = express()
dotenv.config()

const URL = process.env.HOST_MONGODB
const PORT = process.env.PORT || 4000

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('connected to mongoDB')
    app.listen(PORT, () => {
      console.log(`listening server on port: ${PORT}`)
    })
  })
  .catch(error => console.log(error.message))


app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use('/', routes)
