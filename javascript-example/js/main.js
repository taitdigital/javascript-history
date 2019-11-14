var example = {
  init() {
    this.bindEvents();
  },
  bindEvents() {
    var self = this;
    document.getElementById('button').addEventListener('click', function() {
      self.makeRequest();
    });
  },
  makeRequest() {
    var self = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        self.printResponse(this.responseText);
      }
    };

    xhttp.open('GET', 'http://localhost/frontend-frameworks/data/data.json', true);
    xhttp.send();
  },
  printResponse(response) {
    var responseString = '';
    var parsedResponse = JSON.parse(response);

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

    iterate(parsedResponse);

    document.getElementById('output').innerHTML = responseString;
  }
};

example.init();
