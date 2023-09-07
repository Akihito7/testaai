exports.up = knex => knex.schema.createTable("Products", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("description").notNullable();
    table.text("category").notNullable();
    table.text("price").notNullable();
  });

  exports.down = knex => knex.schema.dropTable("Products");