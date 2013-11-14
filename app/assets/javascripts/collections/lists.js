Todorize.Collections.Lists = Backbone.Collection.extend({
  model: Todorize.Models.List,
  // url: '/boards/:board_id/lists'
  initialize: function() {
      this.sort_key = 'position';
  },
  comparator: function(a, b) {
      a = a.get(this.sort_key);
      b = b.get(this.sort_key);
      return a > b ?  1
           : a < b ? -1
           :          0;
  },
  sort_by_id: function() {
      this.sort();
  },
})