import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: true,
  isFrozen: false,

  title: 'Default block',
  body: 'Default body',


  actions: {
    toggleBody() {
      // Do not allow toggling state when frozen
      if (this.get('isFrozen')) { return; }

      this.toggleProperty('isOpen');
    },
  },
});
