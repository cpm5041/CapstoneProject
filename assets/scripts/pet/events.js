'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// const checkForBlanks = function (data) {
//   // check to see if user entered valid values in form fields
//   const userTitle = (data.page.title).replace(/ +?/g, '')
//   const userBody = (data.page.body).replace(/ +?/g, '')
//   const userFooter = (data.page.footer).replace(/ +?/g, '')
//   if ((userTitle.length === 0) ||
//     (userBody.length === 0) ||
//     (userFooter.length === 0)) {
//     // if not valid - return true
//     return true
//   } else {
//     // if valid - return false
//     return false
//   }
// }

const onCreatePet = function (event) {
  event.preventDefault()
  // assign form fields inputs to data
  const data = getFormFields(event.target) // same as this
  // if (checkForBlanks(data)) {
  //   // if invalid - notify user and do not send to API
  //   $('.updateerror').text('An error occurred. You must fill in all fields in order to create an item.')
  //   $('#fail-page-create-alert').alert()
  //   $('#fail-page-create-alert').fadeTo(1500, 500).slideUp(500, () => {
  //     $('#fail-page-create-alert').slideUp(500)
  //   })
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 'fast')
  // } else {
    // if no blanks - send ajax request
  api.createPet(data)
      .then(ui.createPetSuccess)
      .catch(ui.createPetFailure)
  // }
}

const onGetPets = (event) => {
  api.getPets()
    .then(ui.getPetsSuccess)
    .catch(ui.getPetsfailure)
}
const onRemovePet = function () {
  event.preventDefault()
  console.log('remove pet clicked')
  const data = $(this).attr('data-id')
  api.removePet(data)
    .then(ui.removePetSuccess)
    .catch(ui.removePetFail)
    .done(onGetPets)
}
const onUpdatePet = function (event) {
  event.preventDefault()
  // assign input form fields to data
  const data = getFormFields(event.target)
    // use id to update that page id
  console.log('update clicked')
  const petId = $(this).attr('data-id')
  console.log('petId', petId)
  console.log('data', data)
  api.updatePets(petId, data)
      .done(ui.updatePetsSuccess)
      .catch(ui.updatePetFail)
      // .done(onGetPets)
}
const addPetHandlers = () => {
  $('#getPuppyForm').on('submit', onCreatePet)
  $('#showPetsButton').on('click', onGetPets)
  $(document).on('click', '.removePet', onRemovePet)
  $(document).on('submit', '.update-pet', onUpdatePet)
}
module.exports = {
  onCreatePet,
  addPetHandlers,
  onGetPets,
  onRemovePet,
  onUpdatePet
}
