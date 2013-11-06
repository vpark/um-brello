window.Todorize = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //fetch all the boards
    var $rootEl = $('#content');
    var boards  = new Todorize.Collections.Boards(data.boards);
    
    boards.fetch({
      success: function(){
        console.log(boards)
        new Todorize.Routers.AppRouter(feeds);
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
