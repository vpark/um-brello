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
    var user = new Todorize.Models.User();
    user.fetch();
    boards.fetch({
      success: function(){
        new Todorize.Routers.AppRouter(user, boards, $rootEl, $sidebar);
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
