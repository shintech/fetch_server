import express from 'express'
import {fetch} from './queries'

const router = express.Router()

export default function getRouter (options) {
  router.route('/fetch')
    .get(fetch(options).fetchAllModels)
    .post(fetch(options).createModel)

  return router
}
