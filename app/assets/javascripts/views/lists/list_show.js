Todorize.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],
  
  render: function() {
    this.$el.html(this.template({lists: this.collection}));
    
    return this;
  },
});