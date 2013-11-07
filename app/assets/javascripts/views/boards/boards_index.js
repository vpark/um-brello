Todorize.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  
  initialize: function(){
  },
  
  render: function(){
    this.$el.html(this.template({
      boards: this.collection
    }));
    return this;
  },
  
  events: {
    'click li': "showList"
  },
  
  //create the showList function that 
});