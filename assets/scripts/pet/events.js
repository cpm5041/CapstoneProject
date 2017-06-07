'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const checkForBlanks = function (data) {
  // check to see if user entered valid values in form fields
  const userName = (data.pet.name).replace(/ +?/g, '')
  const userSpecies = (data.pet.species).replace(/ +?/g, '')
  const userBreed = (data.pet.breed).replace(/ +?/g, '')
  if ((userName.length === 0) ||
    (userSpecies.length === 0) ||
    (userBreed.length === 0)) {
    // if not valid - return true
    return true
  } else {
    // if valid - return false
    return false
  }
}

const onCreatePet = function (event) {
  event.preventDefault()
  // assign form fields inputs to data
  const data = getFormFields(event.target) // same as this
  if (checkForBlanks(data)) {
    // if invalid - notify user and do not send to API
    $('.updateerror').text('An error occurred. You must fill in all fields in order to create an item.')
    $('#fail-pet-create-alert').alert()
    $('#fail-pet-create-alert').fadeTo(1500, 500).slideUp(500, () => {
      $('#fail-pet-create-alert').slideUp(500)
    })
    $('html, body').animate({
      scrollTop: 0
    }, 'fast')
  } else {
    // if no blanks - send ajax request
    api.createPet(data)
      .then(ui.createPetSuccess)
      .catch(ui.createPetFailure)
  }
}
const onGetAllPets = (event) => {
  api.getAllPets()
    .then(ui.getAllPetsSuccess)
    .catch(ui.getAllPetsfailure)
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
  const petId = $(this).attr('data-id')
  if (checkForBlanks(data)) {
    // if invalid - notify user and do not send to API
    $('.updateerror').text('An error occurred. You must fill in all fields in order to create an item.')
    $('#fail-pet-create-alert').alert()
    $('#fail-pet-create-alert').fadeTo(1500, 500).slideUp(500, () => {
      $('#fail-pet-create-alert').slideUp(500)
    })
    $('html, body').animate({
      scrollTop: 0
    }, 'fast')
  } else {
    // if no blanks - send ajax request
    api.updatePets(petId, data)
      .done(ui.updatePetsSuccess)
      .catch(ui.updatePetFail)
      .done(onGetPets)
  }
}
const addPetHandlers = () => {
  $('#getPuppyForm').on('submit', onCreatePet)
  $('#showPetsButton').on('click', onGetPets)
  $('#showAllPetsButton').on('click', onGetAllPets)
  $(document).on('click', '.removePet', onRemovePet)
  $(document).on('submit', '.update-pet', onUpdatePet)
}
module.exports = {
  onCreatePet,
  addPetHandlers,
  onGetPets,
  onRemovePet,
  onUpdatePet,
  checkForBlanks
}
