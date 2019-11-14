require([
  'dojo/dom',
  'dojo/request/xhr',
  'dojo/on',
  'dojox/dtl/Context',
  'dojo/domReady!'
], function (dom, xhr, on) {
  var output = dom.byId('output');
  var button =  dom.byId('button');

  on(button, 'click', function(e) {
    doRequest();
  });

  function doRequest() {

    xhr('http://localhost/frontend-frameworks/data/data.json', {
      handleAs: 'json'
    }).then(function(data) {
      console.warn(data);
      output.innerHTML += data;
    }, function(err){
      console.warn('An error Occurred: ', err);
    }, function(evt) {
      console.warn('xhr 2 callback: ', evt);
    });

  }
});
