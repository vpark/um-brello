Todorize.Routers.AppRouter = Backbone.Router.extend({
  intialize: function(){
    
  },
  routes: {
    "": "index",
  },
  
  index: function(){
    var boards = new Todorize.Views.boardsIndex({
      collection: this.boards
    });
    this.$rootEl.html(boardsIndex.render().$el);
  }
  
  
});