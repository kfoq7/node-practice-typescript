import { config } from 'dotenv'
config({ path: `${__dirname}/.env` })

import Server from './src/Server'

const server = new Server()
server.serverListen()
