import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({

  loadWeather: task(function* (zip) {
    let weather = yield Ember.$.get('/weather', { zip: zip });
    this.set('weather', weather);
  }).restartable(),

  actions: {
    loadWeather(zip) {
      if (zip.length === 5) {
        this.get('loadWeather').perform(zip);
      }
    },
  },

});
