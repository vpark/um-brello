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
    
    var boardsNewView = new Todorize.Views.BoardsNew({});
    
    this.$sidebar.html(boardsIndexView.render().$el);
    this.$rootEl.html(boardsNewView.render().$el);
  },
  
  showList: function (board_id) {
    var board = this.boards.get(board_id);
    // var board = this.boards.get(board_id).fetch();
    var lists = this.boards.get(board_id).get('lists');

    var listShow = new Todorize.Views.ListShow({
      collection: lists,
      model: board
    });
    
    this.index();
    this.$rootEl.html(listShow.render().$el);
    // debugger;
    this.boards.fetch();
  }
  
  
  
});