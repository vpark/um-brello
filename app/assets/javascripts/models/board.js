Todorize.Models.Board = Backbone.Model.extend({
  idAttribute: "id",
  parse: function(response) {
    response["lists"] = new Todorize.Collections.Lists(response["lists"], {
      url: "/boards/" + response["id"] + "/lists"
    });
    
    response["lists"].board_id = response["id"];

    return response;
  },
  urlRoot: '/boards'
});