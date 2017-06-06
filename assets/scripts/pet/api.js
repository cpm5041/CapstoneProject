'use strict'

const config = require('../config')
const store = require('../store')

const createPet = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/pets',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getPets = function () {
  return $.ajax({
    url: config.apiOrigin + '/pets',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCurrentUserPages = function () {
  return $.ajax({
    url: config.apiOrigin + '/userpages/' + store.user.id, // "http://book-json.herokuconfig.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCurrentUserPages = (pageId, data) => {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + pageId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const removePet = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/pets/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createPet,
  getPets,
  getCurrentUserPages,
  updateCurrentUserPages,
  removePet
}
