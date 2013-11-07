Todorize.Models.Board = Backbone.Model.extend({
  parse: function(response) {
    response["lists"] = new Todorize.Collections.Lists(response["lists"], {
      url: "/boards/" + response["id"] + "/lists"
    })

    return response;
  }
});