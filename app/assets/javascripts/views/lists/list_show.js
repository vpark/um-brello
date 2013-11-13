Todorize.Views.ListShow = Backbone.View.extend({
  initialize: function(){
    $('.todorize').click(this.hideList.bind(this));
    $('.todorize').click(this.hideCard.bind(this));
  },
  
  events: {
    'click .new-list': 'showAddList',
    'submit form.new-list-form': 'addList',
    'click div.delete-class': 'deleteList',
    'click a.add-card': 'showAddCard',
    'submit form.add-card-form': 'addCard',
    'click li.delete-card': 'deleteCard',
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
    var that = this;
    list.save(list.toJSON(), {success: function() {
      lists.add(list);
      that.render();
    }, error: function() {
      console.log('error: list did not save');
    }
    });
  },
  
  deleteList: function (event) {
    event.preventDefault();
    
    var list_id = $(event.target).data('list-id')
    var listToDel = this.collection.find(function (model){
      return model.get('id') == list_id;
    });
    
    listToDel.destroy();
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
  
  deleteCard: function (event) {
    event.preventDefault();
    
    var list_id = $(event.target.parentElement).find('form').data('list-id')
    var card_id = $(event.target).data('card-id')
    var list = this.collection.get(list_id);
    var cardToDel = new Todorize.Models.Card();
    var cardModel;
    list.attributes.cards.forEach(function (model){
      if(model.id == card_id) {
        cardToDel.set(model);
        cardModel = model;
      }
    });
    var cardModelIndex = list.attributes.cards.indexOf(cardModel);
    console.log(cardModelIndex);
    list.attributes.cards.splice(cardModelIndex,1);
    cardToDel.destroy();
    this.render();
  },
  
  
});