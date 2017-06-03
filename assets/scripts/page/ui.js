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
  // clear values in fields
  // $('#success').html(data.results[1].name)
  console.log(data.results[1].name)
}

const getStarWarsFail = () => {
  $('#fail').html('shits broke')
  console.log('shits broke')
}

module.exports = {
  getStarWars,
  getStarWarsFail
}
