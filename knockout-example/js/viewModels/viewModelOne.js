define(function(require) {

  var viewModelOne = {

    requestController: function(shouter) {

      this.requestViewModel = function() {
        var self = this;
        this.response = ko.observable('');

        this.response.subscribe(function(response) {
            shouter.notifySubscribers(response, 'publishResponse');
        });

        this.makeRequest = function() {

          var xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              self.response(JSON.parse(this.responseText));
            }
          };

          xhttp.open('GET', 'http://localhost/frontend-frameworks/data/data.json', true);
          xhttp.send();
        };
      };

    }
  };

  return viewModelOne;
});
