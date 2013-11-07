Todorize.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(boards, $rootEl){
    this.boards = boards;
    this.$rootEl = $rootEl;
    console.log(this.boards);
  },
  routes: {
    "": "index",
  },
  
  index: function(){
    var boardsIndexView = new Todorize.Views.BoardsIndex({
      collection: this.boards
    });
    this.$rootEl.html(boardsIndexView.render().$el);
  }
  
  
});