import Ember from 'ember';

export default Ember.Component.extend({
  showBody: true,

  actions: {
    toggleBody() {
      this.toggleProperty('showBody');
    },
  },
});
