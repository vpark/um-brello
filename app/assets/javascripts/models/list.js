Todorize.Models.List = Backbone.Model.extend({
  parse: function(response) {
    response["cards"] = new Todorize.Collections.Cards(response["cards"], {
      url: "/lists/" + response["id"] + "/cards/"
    })

    return response;
  },
  urlRoot:'/lists'
});