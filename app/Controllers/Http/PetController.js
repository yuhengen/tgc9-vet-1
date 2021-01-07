'use strict'

const Breed = use ('App/Models/Breed')
const Owner = use ('App/Models/Owner')
const Pet = use ('App/Models/Pet')

class PetController {
  async create({view}) {
    let breeds = await Breed.all();
    let owners = await Owner.all();
    return view.render('pets/create',{
      breeds: breeds.toJSON(),
      owners: owners.toJSON()
    })
  }

  async processCreate({response, request}) {
    let formData = request.post();
    let newPet = new Pet();
    newPet.name = formData.name;
    newPet.owner_id = formData.owner;
    newPet.breed_id = formData.breed;
    newPet.age = formData.age;
    await newPet.save();
    response.json(newPet);

  }
}

module.exports = PetController
