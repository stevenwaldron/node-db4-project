
exports.up = function(knex) {
    return knex.schema
    .createTable('recipies', (tbl) => {
        tbl.increments('id')
        tbl.string('name',128)
            .notNullable()
    })
    .createTable('steps',(tbl) => {
        tbl.increments('step_id')
            .unsigned();
        tbl.string('step_name',128)
            .notNullable();
        tbl.string('description', 128)
            .notNullable();
        tbl.integer('recipie_id')
            .unsigned()
            .references('recipies.id');
    })
    .createTable('ingredients', (tbl) => {
        tbl.increments('id')
            .unsigned();
        tbl.string('name',128)
            .notNullable()
    })
    .createTable('recipie_ingredients', (tbl) => {
        tbl.integer('recipie_id')
            .unsigned()
            .notNullable()
            .references('recipies.id');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.float('amount')
            .unsigned()
            .notNullable()
        tbl.primary(['recipie_id','ingredient_id']);
    });
  };
        

exports.down = function(knex) {
return knex.schema
  .dropTableIfExists('recipie_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipies')

};
