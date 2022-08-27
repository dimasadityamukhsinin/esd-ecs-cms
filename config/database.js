module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'esd_ecs_cms',
      user: 'postgres',
      password:'admin',
      ssl: false
    },
  },
});