Todorize.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(boards, $rootEl, $sidebar){
    this.boards = boards;
    this.$rootEl = $rootEl;
    this.$sidebar = $sidebar;
    console.log(this.boards);
  },
  routes: {
    "": "index",
  },
  
  index: function(){
    var boardsIndexView = new Todorize.Views.BoardsIndex({
      collection: this.boards
    });
    this.$sidebar.html(boardsIndexView.render().$el);
  }
  
  
});