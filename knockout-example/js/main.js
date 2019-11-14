requirejs.config({
  baseUrl: 'js/',
  paths: {
      app: '../'
  },
  waitSeconds : 0
});

require(['viewModels/viewModelOne', 'viewModels/viewModelTwo'],
  function(viewModelOne, viewModelTwo) {
      var global = {
          init:function() {
              var self = this;
              var shouter = new ko.subscribable();

              viewModelOne.requestController(shouter);
              viewModelTwo.responseController(shouter);

              self.masterVM = (function() {
                  this.requestViewModel = new viewModelOne.requestViewModel();
                  this.responseViewModel = new viewModelTwo.responseViewModel();
              })();

              ko.applyBindings(self.masterVM);
          }
    };

    if( document.readyState !== 'loading' ) {
      global.init();
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        global.init();
      });
    }

  });
