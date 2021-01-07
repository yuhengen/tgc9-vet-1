'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClinicSchema extends Schema {
  up () {
    this.create('clinics', (table) => {
      table.increments()
      table.string('name', 254).notNullable();
      table.string('address', 254).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('clinics')
  }
}

module.exports = ClinicSchema
