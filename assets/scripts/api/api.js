'use strict'

// const config = require('../config')
// const store = require('../store')
const getStarWars = (pageNumber) => {
  return $.ajax({
    // url: 'http://swapi.co/api/people/?page=' + pageNumber,
    url: 'http://pokeapi.co/api/v2/pokemon/?offset=' + pageNumber,
    method: 'GET'
  })
}

module.exports = {
  getStarWars
}
