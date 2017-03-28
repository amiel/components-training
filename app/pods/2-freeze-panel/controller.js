import Ember from 'ember';

export default Ember.Controller.extend({
  isFrozen: false,
  isOpen: true,

  actions: {
    toggleIsFrozen() {
      this.toggleProperty('isFrozen');
    },

    togglePanel() {
      return !this.get('isFrozen');
    },
  }
});
