'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pet extends Model {
  breed() {
    return this.belongsTo('App/Models/Breed');
  }
  owner() {
    return this.belongsTo('App/Models/Owner')
  }
  vets() {
    return this.belongsToMany('App/Models/Vet')
  }
}

module.exports = Pet
