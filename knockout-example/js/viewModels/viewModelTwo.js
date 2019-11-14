define(function(require) {

  var viewModelTwo = {

    responseController: function(shouter){

      this.responseViewModel = function() {
        var self = this;
        this.response = ko.observable('');

        shouter.subscribe(function(newValue) {
          parseValue = ko.mapping.fromJS(newValue)
          this.response(parseValue);
        }, this, 'publishResponse');
      };

    }

  };
  return viewModelTwo;
});
