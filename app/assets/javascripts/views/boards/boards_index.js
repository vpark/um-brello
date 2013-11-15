Todorize.Views.BoardsIndex = Backbone.View.extend({
  initialize: function(){
    $('.todorize').click(this.hideBoard.bind(this));
  },
  
  events: {
    'click .add-board > a': 'showAddBoard',
    'submit form.add-board-form': 'addBoard',
    'click li.user-board a.delete-board': 'deleteBoard',
  },
  
  template: JST['boards/index'],
  
  render: function(){
    this.$el.html(this.template({
      boards: this.collection
    }));
    return this;
  },

  showAddBoard: function() {
    event.preventDefault();
    var newBoardForm = this.$el.find('form.add-board-form');
    newBoardForm.show();
  },

  hideBoard: function(event) {
    if(!$(event.target.parentElement).hasClass('add-board') && 
    !$(event.target.parentElement).hasClass('add-board-form')){
          
      var newBoardForm = this.$el.find('form.add-board-form');
      newBoardForm.hide();
    }
  },
  
  addBoard: function (event) {
    event.preventDefault();
    
    var user_id = this.$el.find('.user-board').first().data('user-id')
    var currentBoards = this.collection;
    
    var newBoard = new Todorize.Models.Board();
    var boardAttrs = $(event.target).serializeJSON();
    
    // var newBoardOwner = new Todorize.Models.BoardOwner();
    // var boardOwnerAttrs = $(event.target.parentElement).find('.add-board-owner-form').serializeJSON();
    
    boardAttrs.board.user_id = user_id;
    newBoard.set(boardAttrs.board);
    
    var that = this;
    newBoard.save(newBoard.toJSON(), {success: function() {
      currentBoards.add(newBoard);
      that.render();
    }, error: function() {
      console.log('error: board did not save');
    }
  });

  // boardOwnerAttrs.board_owner.user_id = user_id;    
  // boardOwnerAttrs.board_owner.board_id = newBoard.id;
  // newBoardOwner.set(boardOwnerAttrs.board_owner);
  // newBoardOwner.save();    
  },
  
  deleteBoard: function (event) {
    event.preventDefault();
    
    var board_id = $(event.target).data('board-id')
    var boardToDel = this.collection.find(function (model){
      return model.get('id') == board_id;
    });
    
    boardToDel.destroy();
    this.render();
  }
  
  
  
});