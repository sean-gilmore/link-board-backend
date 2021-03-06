// create file using `knex migration:make migration_name`
// run migrations up using `knex migrate:latest`
// import knex from '../database';
// remember to be inside the app directory before you can run migrations

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('link', function(table) {
      table.increments('id');
      table.text('url').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("link")
};
