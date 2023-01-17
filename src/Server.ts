import express from 'express'
import morgan from 'morgan'
import { dbConnection } from './db/connect'
import { routerApi } from './routes'

class Server {
  private app
  private port?: number | string | undefined

  constructor() {
    this.app = express()
    this.port = process.env.PORT ?? 8000

    this.DBConnect()
    this.middlewares()
    this.routes()
  }

  async DBConnect() {
    await dbConnection()
  }

  routes() {
    routerApi(this.app)
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
  }

  serverListen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`)
    })
  }
}

export default Server
