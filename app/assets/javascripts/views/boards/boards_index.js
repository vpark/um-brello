Todorize.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index']
  
  initialize: function(){
    var that = this;
    that.render.bind(that);
  },
  
  render: function(){
    var that = this;
    that.$el.html(that.template({
      boards: that.collection
    }));
    return that;
  },
});