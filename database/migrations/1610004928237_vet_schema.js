'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VetSchema extends Schema {
  up () {
    this.create('vets', (table) => {
      table.increments()
      table.string('first_name', 100).notNullable();
      table.string('last_name', 100).notNullable();
      table.string('license', 100).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('vets')
  }
}

module.exports = VetSchema
