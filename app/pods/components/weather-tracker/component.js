import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({

  loadWeather: task(function* (zip) {
    if (zip.length === 5) {
      this.set('weather', null);
      let weather = yield Ember.$.get('/weather', { zip: zip });
      this.set('weather', weather);
    }
  }).restartable(),
});
