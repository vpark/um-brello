Todorize.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(boards, $rootEl, $sidebar){
    this.boards = boards;
    this.$rootEl = $rootEl;
    this.$sidebar = $sidebar;
  },
  routes: {
    "": "index",
    "boards/:board_id": "showList"
  },
  
  index: function(){
    var boardsIndexView = new Todorize.Views.BoardsIndex({
      collection: this.boards
    });
    this.$sidebar.html(boardsIndexView.render().$el);
    // this.$rootEl.html();
  },
  
  showList: function (board_id) {
    var lists = this.boards.get(board_id).get('lists');
    var board = this.boards.get(board_id);
    var listShow = new Todorize.Views.ListShow({
      collection: lists,
      model: board
    });
    
    this.index();
    this.$rootEl.html(listShow.render().$el);
  }
  
  
  
});