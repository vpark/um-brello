Todorize.Views.ListShow = Backbone.View.extend({
  initialize: function(){
    $('.container').click(this.hideList.bind(this));
  },
  
  events: {
    'click .new-list': 'showAddList',
    'submit form.new-list-form': 'addList',
    'click a.add-card': 'showAddCard'
    'submit form.new-card-form': 'addCard'
  },
  
  template: JST['lists/show'],
  
  
  render: function() {
    this.$el.html(this.template({lists: this.collection}));
    return this;
  },
  
  showAddList: function() {
    var newList = this.$el.find('div.new-list');
    var newListForm = this.$el.find('div.new-list-form');
    $(newList).hide();
    $(newListForm).show();
  },

  hideList: function(event) {
    if(!$(event.target).hasClass('new-list') && !
        $(event.target).hasClass('new-list-form')){
          
      var newList = this.$el.find('div.new-list');
      var newListForm = this.$el.find('div.new-list-form');
    
      $(newList).show();
      $(newListForm).hide();
    }
  },
  
  addList: function(event) {
    event.preventDefault();
    //this is the board model passed in to the view
    currentBoard = this.model;
    
    var attrs = $(event.target).serializeJSON();
    attrs.list.board_id = currentBoard.id;
    var list = new Todorize.Models.List();
    var lists = currentBoard.get('lists');

    list.set(attrs.list);
    list.save();
    lists.add(list);
    this.render();
  },
  
  showAddCard: function (event) {
    event.preventDefault();
    var addCardForm = $(event.target.parentElement).find('div');
    addCardForm.show();
  },
  
  addCard: function (event) {
    event.preventDefault();
    debugger;
  }
  
  
});