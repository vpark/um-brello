Todorize.Views.ListShow = Backbone.View.extend({
  initialize: function(){
    $('.container').click(this.hideList.bind(this));
    $('.container').click(this.hideCard.bind(this));
  },
  
  events: {
    'click .new-list': 'showAddList',
    'submit form.new-list-form': 'addList',
    'click a.add-card': 'showAddCard',
    'submit form.add-card-form': 'addCard'
  },
  
  template: JST['lists/show'],
  
  
  render: function() {
    // var board = this.model;
    // var lists = board.get("lists");
    this.$el.html(this.template({lists: this.collection}));
    return this;
  },
  
  showAddList: function() {
    // var newList = this.$el.find('div.new-list');
    var newListForm = this.$el.find('div.new-list-form');
    // $(newList).hide();
    $(newListForm).show();
  },

  hideList: function(event) {
    if(!$(event.target).hasClass('new-list') && !
        $(event.target).hasClass('new-list-form')){
          
      // var newList = this.$el.find('div.new-list');
      var newListForm = this.$el.find('div.new-list-form');
    
      // $(newList).show();
      $(newListForm).hide();
    }
  },
  
  addList: function(event) {
    event.preventDefault();
    //this is the board model passed in to the view
    var currentBoard = this.model;
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
    var allAddCardForm = this.$el.find('div.add-card-form');
    var addCardForm = $(event.target.parentElement).find('div');
    allAddCardForm.hide();
    addCardForm.show();
  },
  
  addCard: function (event) {
    event.preventDefault();
    
    var list_id = $(event.target.parentElement).find('form').data('list-id'); 
    var card = new Todorize.Models.Card();
    var currentList = this.collection.get(list_id);
    var attrs = $(event.target).serializeJSON();
    attrs.card.list_id = list_id;    
    card.set(attrs.card);
    card.save();
    currentList.attributes.cards.push(card.attributes);
    this.render();
  },
  hideCard: function(event) {
    if(!$(event.target).hasClass('add-card') && !
        $(event.target).hasClass('add-card-form')){
        var allAddCardForm = this.$el.find('div.add-card-form');
          allAddCardForm.hide();
        }
  },
  
  
});