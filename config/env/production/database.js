module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "postgres"),

    connection: {
      host: env("DATABASE_HOST", "top2.nearest.of.esd-ecs-db.internal"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "esd_ecs"),
      user: env("DATABASE_USERNAME", "esd_ecs"),
      password: env("DATABASE_PASSWORD", "7cmdvp2Ph5tlFAU"),
      ssl: false,
    },
    debug: false,
  },
});