'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetVetSchema extends Schema {
  up () {
    this.create('pet_vet', (table) => {
      table.increments()
      // fk to the pets
      table.integer('pet_id').unsigned().notNullable();
      table.foreign('pet_id').references('pets.id');

      /// fk to the vets
      table.integer('vet_id').unsigned().notNullable();
      table.foreign('vet_id').references('vets.id');

      table.timestamps()
    })
  }

  down () {
    this.drop('pet_vet')
  }
}

module.exports = PetVetSchema
