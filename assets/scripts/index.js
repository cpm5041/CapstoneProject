'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const petEvents = require('./pets/pet.js')
const pageEvents = require('./page/events.js')

$(() => {
  setAPIOrigin(location, config)
  petEvents.addPetHandlers()
  pageEvents.addPageHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
