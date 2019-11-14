const example = {
  init() {
    this.bindEvents();
  },
  bindEvents() {
    document.querySelector('#button').addEventListener('click', (e) => {
      this.makeRequest();
    })
  },
  async makeRequest() {
    const response = await fetch('http://localhost/frontend-frameworks/data/data.json');
    const json = await response.json();
    this.printResponse(json);
  },
  printResponse(json) {
    let responseString = '';

    const iterate = (obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        if (obj.hasOwnProperty(key)) {
          responseString += `${key}: ${value}<br />`;

          if (typeof value === 'object') {
            iterate(value)
          }
        }
      });
    };

    iterate(json);

    document.querySelector('#output').innerHTML = responseString;
  }
};

example.init();
