const ModelView = Backbone.Marionette.View.extend({
  template: require('../templates/model-view-template.html'),
  tagName: 'li',
  serializeData: function () {
    return {
      'name': this.model.get('name'),
      'attribute': this.model.get('attribute')
    }
  }

})

export default ModelView
