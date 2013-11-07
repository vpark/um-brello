window.Todorize = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //fetch all the boards
    var $rootEl = $('#content');
    var $sidebar = $('#sidebar');
    var boards  = new Todorize.Collections.Boards();
    boards.fetch({
      success: function(){
        console.log(boards)
        new Todorize.Routers.AppRouter(boards, $rootEl, $sidebar);
        Backbone.history.start();
        // {pushState: true}
      },
      error: function() {
        console.log("Failed to fetch.");
      }
    });
  }
};

$(document).ready(function(){
  Todorize.initialize();
});
