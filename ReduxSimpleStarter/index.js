const express = require('express');
const bodyParser = require('body-parser');

let knex;
if (process.env.DATABASE_URL) {
  knex = require('knex')({
    connection: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL,
    },
  });
}
else {
  knex = require('knex')({
    client: 'postgresql',
    connection: {
      user: 'admin',
      database: 'bloginfo',
    },
  });
}

const app = express();
const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));