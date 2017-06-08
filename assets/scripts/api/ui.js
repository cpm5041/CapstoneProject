'use strict'

// const store = require('../store')
// const api = require('./api')
// const showItemsTemplate = require('../templates/item-listing-grid.handlebars')
const showCh = require('../templates/star-wars.handlebars')

const getStarWars = (data) => {
  const showPplHtml = showCh({
    characters: data.results
  })
  $('#success').append(showPplHtml)
  console.log(data.results[1].name)
}

const getStarWarsFail = () => {
  $('#fail').html(' broke')
}

module.exports = {
  getStarWars,
  getStarWarsFail
}
