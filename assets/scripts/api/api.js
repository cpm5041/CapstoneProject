'use strict'

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
