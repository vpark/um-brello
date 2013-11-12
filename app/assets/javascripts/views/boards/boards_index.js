Todorize.Views.BoardsIndex = Backbone.View.extend({
  initialize: function(){
    $('.container').click(this.hideBoard.bind(this));
  },
  
  events: {
    'click li.add-board': 'showAddBoard'
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
  
});