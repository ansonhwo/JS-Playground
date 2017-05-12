exports.development = {
  client: 'postgresql',
  connection: {
    user: 'admin',
    database: 'bloginfo',
  },
  seeds: {
    directory: './seeds/dev',
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations',
  },
}