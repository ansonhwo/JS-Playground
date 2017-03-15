const express = require('express')
const app = express()

const PORT = process.env.PORT || 9999

app.use(express.static(__dirname + '/public'))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
