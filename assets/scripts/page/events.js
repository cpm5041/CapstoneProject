'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onGetStarwars = (event) => {
  for (let pageNumber = 1; pageNumber < 810; pageNumber += 20) {
    api.getStarWars(pageNumber)
      .then(ui.getStarWars)
      .catch(ui.getStarWarsFail)
  }
}

const addPageHandlers = () => {
  $('#getPuppyForm').on('submit', onGetStarwars)
}

module.exports = {
  addPageHandlers
}
