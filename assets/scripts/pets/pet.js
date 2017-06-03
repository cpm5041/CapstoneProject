'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const getPictures = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const species = data.pet.species
  // const breed = data.pet.breed
  // console.log(getFormFields(event.target))
  // console.log('data', data)
  // console.log('species', species, 'breed', breed)
  let people = []
  // for (let i = 1; i < 3; i++) {
    // $.ajax({
    //   'type': 'GET',
    //   'dataType': 'application/json',
    //   'url': 'http://swapi.co/api/people/?page=' + 1,
    //   'success': function (data) {
    //     console.log('data', data, 'name', data.results[1].name)
    //     console.log('people', people.length)
    //   },
    //   'error': function () {
    //     console.log('shits broke')
    //   }
    // })
  //}
}
const showBlog = (event) => {
  event.preventDefault()
  return $.ajax({
    url: 'http://swapi.co/api/people/?page=' + 1,
    method: 'GET'
  })
}

const addPetHandlers = () => {
  $('#getPuppyForm').on('submit', showBlog)
}

module.exports = {
  addPetHandlers
}
