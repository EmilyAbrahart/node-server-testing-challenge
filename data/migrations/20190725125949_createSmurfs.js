
exports.up = function(knex) {
  return knex.schema.createTable('smurfs', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.integer('age').notNullable();
    tbl.integer('height').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('smurfs');
};
