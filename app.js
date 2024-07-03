const express = require('express')
const { static: expressStatic } = require('express')
const app = express()
require('dotenv').config()

// get the port from env variable
const PORT = process.env.PORT || 3000

app.use(expressStatic('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
