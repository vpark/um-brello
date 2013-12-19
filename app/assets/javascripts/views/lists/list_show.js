Todorize.Views.ListShow = Backbone.View.extend({
  initialize: function(){
    $('.todorize').click(this.hideList.bind(this));
    $('.todorize').click(this.hideCard.bind(this));
    this.collection.on('all', this.render, this);
  },
  
  events: {
    'click .new-list': 'showAddList',
    'submit form.new-list-form': 'addList',
    'click div.delete-class': 'deleteList',
    'click a.add-card': 'showAddCard',
    'submit form.add-card-form': 'addCard',
    'click li.card div.delete-card': 'deleteCard',
    'dblclick li.card': 'showComment'
  },
  
  template: JST['lists/show'],
  
  
  render: function() {
    this.$el.html(this.template({lists: this.collection.toJSON()}));
    

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
    attrs.list.position = lists.length;
    list.set(attrs.list);
    var that = this;
    list.save(list.toJSON(), {success: function() {
      that.collection.add(list);
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
    $(event.target).hide();
    allAddCardForm.hide();
    addCardForm.show();
  },
  
  addCard: function (event) {
    event.preventDefault();
    var that = this;
    var list_id = $(event.target.parentElement).find('form').data('list-id'); 
    var card = new Todorize.Models.Card();
    var currentList = this.collection.get(list_id);
    var attrs = $(event.target).serializeJSON();
    attrs.card.list_id = list_id;   
    card.set(attrs.card);
    card.save(card.toJSON(), {success: function() {
      that;
      list_id;
      // look into here for the glitched card add
      var curCards = new Todorize.Collections.Cards(currentList.get('cards'));
      curCards.add(card.toJSON());
      currentList.set('cards', curCards.toJSON());
      // currentList.attributes.cards.push(card.attributes);
      // currentList.set('cards', );
    }, error: function() {
      console.log('error: list did not save');
    }
  });
},
  
  hideCard: function(event) {
    if(!$(event.target).hasClass('add-card') && !
        $(event.target).hasClass('add-card-form')){
        var allAddCardForm = this.$el.find('div.add-card-form');
        var allAddCardButton = this.$el.find('a.add-card')
          allAddCardForm.hide();
          allAddCardButton.show();
        }
  },
  
  deleteCard: function (event) {
    event.preventDefault();
    var list_id = $(event.target).closest('ul.list').data('list-id')
    var list = this.collection.get(list_id);

    var card_id = $(event.target).data('card-id')
    var cards = list.attributes.cards
    
    var cardToDel = new Todorize.Models.Card();
    var cardIndex; 
    
    cards.forEach(function (model){
      if(model.id == card_id) {
        cardToDel.set(model);
        cardIndex = cards.indexOf(model);
      }
    });
    list.attributes.cards.splice(cardIndex, 1);
    cardToDel.destroy();
    this.render();
  },
  
  showComments: function (event) {
    alert('derp');
    var url = $(event.target).data('url-id');
    console.log(url);
    
    
    
  }
  
});