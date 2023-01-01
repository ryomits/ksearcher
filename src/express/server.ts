import express, { json } from 'express'
import next from 'next'
//import { logger } from './middleware/logger'

const dev = process.env.NODE_ENV === 'development'

const nextDir = process.env.DEV_NEXT_DIR ?? '.'
const nextApp = next({ dev, dir: nextDir })

async function startupServer() {
  const server = express()
  const handle = nextApp.getRequestHandler()

  const port = Number.parseInt(process.env.PORT ?? '3030', 10)

  server.use(json({ limit: '10000kb' }))
  // server.use(logger({ local: true }))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  /* eslint-disable no-console */
  server.listen(port, () => {
    console.log(`listening on ${port}`)
    console.log(`open http://localhost:${port}`)
  })
}

startupServer().catch(err => console.error(err)) // eslint-disable-line no-console
