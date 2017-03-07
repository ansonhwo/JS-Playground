const express = require('express')
const { MongoClient } = require('mongodb')

const mongoURL = 'mongodb://localhost:11111/mongo'
const PORT = process.env.PORT || 9999

MongoClient.connect(mongoURL, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const app = createApp(db)

  app.listen(PORT, () => console.log(`Listening on ${PORT}`))
})

const createApp = (db) => {
  const app = express()
  app.use(express.static(__dirname + '/public'))

  console.log('connected to database')
  console.log(db)

  return app
}
