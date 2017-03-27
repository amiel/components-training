import Ember from 'ember';

export default Ember.Component.extend({


  actions: {
    loadWeather(zip) {
      if (zip.length === 5) {
        this.set('weather', 'Loading...');

        Ember.$.get('/weather').then((weather) => {
          this.set('weather', weather);
        });

      }
    },
  },

});
