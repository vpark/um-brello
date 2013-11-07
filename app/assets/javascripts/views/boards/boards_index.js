Todorize.Views.BoardsIndex = Backbone.View.extend({
  // events: {
  //   'click li': 'showList'
  // },
  
  template: JST['boards/index'],
  
  initialize: function(){
  },
  
  render: function(){
    this.$el.html(this.template({
      boards: this.collection
    }));
    return this;
  },

  // showList: function (event) {
  //   event.preventDefault();
  //   
  //   var 
  //   
  // }
  
});