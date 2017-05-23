import model from '../models/Model'
import config from '../_config'

const Models = Backbone.Collection.extend({
  model: model,
  url: config.url + 'api/fetch'
})

export default Models
