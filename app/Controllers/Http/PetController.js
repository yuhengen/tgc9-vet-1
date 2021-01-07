'use strict'

const Breed = use ('App/Models/Breed')
const Owner = use ('App/Models/Owner')
const Pet = use ('App/Models/Pet')
const Vet = use ('App/Models/Vet')

class PetController {
  async create({view}) {
    let breeds = await Breed.all();
    let owners = await Owner.all();
    let vets = await Vet.all();
    return view.render('pets/create',{
      breeds: breeds.toJSON(),
      owners: owners.toJSON(),
      vets: vets.toJSON()
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
    // attach many vets to the pet which we are creating
    await newPet.vets().attach(formData.vets);
    response.json(newPet);

  }
}

module.exports = PetController
