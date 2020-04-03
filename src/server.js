import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { connect } from './utils/db'
import config from './config'
import employeeRouter from './resources/employee/employee.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/employee', employeeRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`Rest API  on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
