var example = {
  init() {
    this.bindEvents();
  },
  bindEvents() {
    var self = this;

    $('button').observe('click', function (event) {
      self.makeRequest();
    });

  },
  makeRequest() {
    var self = this;

    new Ajax.Request('http://localhost/frontend-frameworks/data/data.json', {
      onSuccess: function(response) {
        self.printResponse(response.responseJSON);
      },
      onError: function(error) {
        console.error('An error occurred: ', error);
      },
      onComplete: function(res) {
        console.info('request complete: ', res);
      }
    });
  },
  printResponse(response) {
    var responseString = '';

    var iterate = function(obj) {
      for(key of Object.keys(obj)) {
        if(obj.hasOwnProperty(key)) {
          responseString += key + ' : ' + obj[key] + '<br />';

          if (typeof obj[key] === 'object') {
              iterate(obj[key])
          }
        }
      }
    };

    iterate(response);

    document.getElementById('output').innerHTML = responseString;
  }
};

example.init();
