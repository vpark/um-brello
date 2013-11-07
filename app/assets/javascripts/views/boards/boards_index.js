Todorize.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  
  initialize: function(){
  },
  
  render: function(){
    console.log(this.collection);
    this.$el.html(this.template({
      boards: this.collection
    }));
    return this;
  },
  
  events: {
    'click li': "showList"
  },
});