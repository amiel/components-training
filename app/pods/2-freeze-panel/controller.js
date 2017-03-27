import Ember from 'ember';

export default Ember.Controller.extend({
  isFrozen: false,
  isOpen: true,

  actions: {
    toggleIsFrozen() {
      this.toggleProperty('isFrozen');
    },

    togglePanel() {
      if (!this.get('isFrozen')) {
        this.toggleProperty('isOpen');
      }
    },
  }
});
