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

const getPages = function () {
  return $.ajax({
    url: config.apiOrigin + '/pages', // "http://book-json.herokuconfig.com/books"
    method: 'GET'
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

const deleteCurrentUserPages = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createPet,
  getPages,
  getCurrentUserPages,
  updateCurrentUserPages,
  deleteCurrentUserPages
}
