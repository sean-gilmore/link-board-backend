'use strict'

const env = process.env.NODE_ENV || 'development'
const knexFile = require('./knexfile')
const knex = require('knex')(knexFile[env])

export default knex
