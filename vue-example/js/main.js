new Vue({
  el: '#app',
  data () {
    return {
      info: {}
    }
  },
  methods: {
    makeRequest: function() {
      var self = this;

      axios
      .get('http://localhost/frontend-frameworks/data/data.json')
      .then(response => {
        return response.data;
      }).then(data => {
        const formatData = [];

        const iterate = (obj) => {
          Object.entries(obj).forEach(([key, value]) => {
            if (obj.hasOwnProperty(key)) {

              formatData.push(`${key}: ${value}`);

              if (typeof value === 'object') {
                iterate(value)
              }
            }
          });
        };

        iterate(data);

        self.info = formatData;
      });
    }
  }

})
