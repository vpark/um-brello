Todorize.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(user, boards, $rootEl, $sidebar){
    this.user = user;
    this.boards = boards;
    this.$rootEl = $rootEl;
    this.$sidebar = $sidebar;
  },
  routes: {
    "": "index",
    "boards/:board_id": "showList",
    "boards/:board_id/list/:list_id/card/:card_id": "showComments",
  },
  
  index: function(){
    var boardsIndexView = new Todorize.Views.BoardsIndex({
      id: this.user.id,
      collection: this.boards
    });
    
    var boardsNewView = new Todorize.Views.BoardsNew({});
    
    this.$sidebar.html(boardsIndexView.render().$el);
    this.$rootEl.html(boardsNewView.render().$el);
  },
  
  showList: function (board_id) {
    var board = this.boards.get(board_id);
    var lists = this.boards.get(board_id).get('lists');

    var listShow = new Todorize.Views.ListShow({
      collection: lists,
      model: board
    });
    
    this.index();
    this.$rootEl.html(listShow.render().$el);
    this.boards.fetch();
  },
  
  showComments: function (board_id, list_id, card_id) {
    var card = this.boards.get(board_id).get('lists').get(list_id).get('cards').get(card_id);
    
    var CommentIndex = new Todorize.Views.CommentIndex({
      model: card
    });
  }
  
  
  
  
});