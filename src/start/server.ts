import 'reflect-metadata'
import '../database'

import app from './app'

const port = parseInt(process.env.APP_PORT as string, 10) || 5432

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('\x1b[33m%s\x1b[0m', `=> 🚀 Server running on the port: ${port}`)
})
