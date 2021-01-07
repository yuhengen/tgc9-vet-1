'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetSchema extends Schema {
  up () {
    this.create('pets', (table) => {
      table.increments()
      table.string('name').notNullable();
      table.integer('age').notNullable();

      table.integer('owner_id').unsigned().notNullable();
      table.foreign('owner_id').references('owners.id');

      table.integer('breed_id').unsigned().notNullable();
      table.foreign('breed_id').references('breeds.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('pets')
  }
}

module.exports = PetSchema
