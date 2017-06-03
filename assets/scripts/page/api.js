'use strict'

// const config = require('../config')
// const store = require('../store')
const getStarWars = (event) => {
  return $.ajax({
    url: 'http://swapi.co/api/people/?page=' + 1,
    method: 'GET'
  })
}

module.exports = {
  getStarWars
}
