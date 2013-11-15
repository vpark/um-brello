Todorize.Views.BoardsNew = Backbone.View.extend({
  initialize: function(){
  },
  
  template: JST['boards/new'],
  
  render: function(){
    this.$el.html(this.template({
    }));
    return this;
  },
});