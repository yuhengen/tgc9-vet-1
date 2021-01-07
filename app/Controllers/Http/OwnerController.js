'use strict'
const Owner = use('App/Models/Owner')
class OwnerController {
  async index({view}) {
    let owners = await Owner.all();
    return view.render('owners/show',{
      owners: owners.toJSON()
    })
  }
}

module.exports = OwnerController
