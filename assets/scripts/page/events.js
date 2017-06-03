'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onGetStarwars = (event) => {
  api.getStarWars()
    .then(ui.getStarWars)
    .catch(ui.getStarWarsFail)
}

const addPageHandlers = () => {
  $('#getPuppyForm').on('submit', onGetStarwars)
}

module.exports = {
  addPageHandlers
}
