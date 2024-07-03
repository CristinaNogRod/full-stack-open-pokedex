import express, { static as expressStatic } from 'express'
const app = express()
require('dotenv').config()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(expressStatic('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
