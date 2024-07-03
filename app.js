const express = require('express')
const { static: expressStatic } = require('express')
const app = express()
require('dotenv').config()

// get the port from env variable
const PORT = process.env.PORT || 3000

app.use(expressStatic('dist'))

// app.get('/health', (req, res) => {
//   res.send('ok')
// })

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw 'error...  '
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
