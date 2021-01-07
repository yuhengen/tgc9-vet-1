'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BreedSchema extends Schema {
  up () {
    this.create('breeds', (table) => {
      table.increments()
      table.string('name', 254).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('breeds')
  }
}

module.exports = BreedSchema
