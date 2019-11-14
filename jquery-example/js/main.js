var example = {
  init() {
    this.bindEvents();
  },
  bindEvents() {
    var self = this;

    $('#button').on('click', function(e) {
      self.makeRequest();
    });

  },
  makeRequest() {
    var self = this;

    $.ajax({
      dataType: 'json',
      url: 'http://localhost/frontend-frameworks/data/data.json',
      success: function(res) {
        self.printResponse(res);
      },
      error: function(err) {
        console.error('an error occurred: ', err);
      },
      complete: function(res) {
        console.info('request complete: ', res);
      }
    });
  },
  printResponse(response) {
    var responseString = '';

    var iterate = function(obj) {

      $.each(obj, function(key, value) {
        if(obj.hasOwnProperty(key)) {
          responseString += key + ' : ' + value + '<br />';

          if (typeof value === 'object') {
              iterate(value)
          }
        }
      });

    };

    iterate(response);

    $('#output').html(responseString);
  }
};

$(document).ready(function() {
  example.init();
});

