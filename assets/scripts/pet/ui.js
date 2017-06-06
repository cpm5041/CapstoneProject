'use strict'

// const store = require('../store')
// const api = require('./api')
// const showItemsTemplate = require('../templates/item-listing-grid.handlebars')
const showPetsTemplate = require('../templates/get-pets.handlebars')

const createPetSuccess = (data) => {
  // clear values in fields
  $('#NameForm').val('')
  $('#BreedForm').val('')
  $('#SpeciesForm').val('')
  $('#ImageForm').val('')
  $('#bornOnForm').val('')
  $('#GenderForm').val('')

  $('#create-pet-template').val('defaultTemplate')
  $('#success-pet-create-alert').alert()
  $('#success-pet-create-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#success-pet-create-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const createPetFailure = () => {
  $('#fail-page-create-alert').alert()
  $('#fail-page-create-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#fail-page-create-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const getPetsSuccess = (data) => {
  const showPetsHtml = showPetsTemplate({
    pets: data.pets
  })
  $('#getPetHbDiv').html(showPetsHtml)
  console.log('get pets success')
}
const getPetsFailure = (data) => {
  console.log('shit didnt work')
}

const removePetFail = (data) => {
  console.log('dun work')
}

const updatePetsSuccess = (data) => {
  console.log('update worked')
  console.log('data', data)
  $('.update-pet-modal').modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('modal backdrop ran')
  $('#success-page-update-alert').alert()
  $('#success-page-update-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#success-page-update-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const updatePetsFail = (data) => {
  console.log('update dunt worked')
  $('#fail-page-update-alert').alert()
  $('#fail-page-update-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#fail-page-update-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const removePetSuccess = (data) => {
  console.log('removed pet,', data)
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('.page-delete-alert-success').alert()
  $('.page-delete-alert-success').fadeTo(1500, 500).slideUp(500, () => {
    $('.page-delete-alert-success').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const getOthersPagesSuccess = (data) => {
  const showOthersPagesHtml = showOthersPages({
    pages: data.pages
  })
  $('#all-pages').html(showOthersPagesHtml)
}

module.exports = {
  createPetSuccess,
  createPetFailure,
  getPetsSuccess,
  getPetsFailure,
  removePetFail,
  updatePetsSuccess,
  updatePetsFail,
  removePetSuccess,
  getOthersPagesSuccess
}
