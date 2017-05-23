import Marionette from 'marionette'
import Models from './collections/Models'
import ModelsView from './views/ModelsView'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app

    const app = this.app

    const models = new Models()

    models.fetch({
      success: (data) => {
        app.view.showChildView('main', new ModelsView({ collection: models }))
      },

      error: (err) => {
        console.log(err)
      }
    })
  }
})

export default Controller
