Todorize.Collections.Lists = Backbone.Collection.extend({
  model: Todorize.Models.List,
  url: function() {
    return '/boards/' + this.board_id + '/lists';
  }, 
  initialize: function() {
  },
  comparator: function(a, b) {
      a = a.get('position');
      b = b.get('position');
      return a > b ?  1
           : a < b ? -1
           :          0;
  },
})