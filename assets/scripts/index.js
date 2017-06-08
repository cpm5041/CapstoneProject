'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const petEvents = require('./pet/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
  petEvents.addPetHandlers()
  authEvents.addAuthHandlers()
  $('.alert').hide()
  $(function () {
    const dtToday = new Date()
    let month = dtToday.getMonth() + 1
    let day = dtToday.getDate()
    const year = dtToday.getFullYear()
    if (month < 10) {
      month = '0' + month.toString()
    }
    if (day < 10) {
      day = '0' + day.toString()
    }
    const maxDate = year + '-' + month + '-' + day
    $('#bornOnForm').attr('max', maxDate)
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
