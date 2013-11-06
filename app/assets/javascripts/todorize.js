window.Todorize = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //fetch all the boards
    var boards = new Todorize.Collections.Boards();
    
  }
};

$(document).ready(function(){
  Todorize.initialize();
});
