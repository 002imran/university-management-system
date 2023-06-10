import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger'
import { Server } from 'http'
import { error } from 'winston'

process.on('uncaughtException', error => {
  errorlogger.error(error)
  process.exit(1)
})

let server: Server
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database is connected successfully`)

    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed to connect database', err)
  }

  process.on('unhandledRejection', error => {
    console.log(
      'Unhandle Rejection is detected, we are closing our server.....!'
    )

    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is recieved')
  if (server) {
    server.close()
  }
})
