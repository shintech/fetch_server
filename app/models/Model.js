import config from '../_config'

const Model = Backbone.Model.extend({
  urlRoot: config.url + 'api/fetch'
})

export default Model
