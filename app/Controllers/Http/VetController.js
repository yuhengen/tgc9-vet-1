'use strict'

const Vet = use ('App/Models/Vet')

class VetController {
  create({view}){
    return view.render('vets/create')
  }
  async processCreate({request, response}) {
    let formData = request.post();
    let newVet = new Vet();
    newVet.first_name = formData.first_name;
    newVet.last_name = formData.last_name;
    newVet.license = formData.license;
    await newVet.save();
    response.json(newVet);
  }
 }

module.exports = VetController
