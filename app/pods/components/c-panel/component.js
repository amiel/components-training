import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: true,

  title: 'Default block',
  body: 'Default body',


  actions: {
    toggleBody() {
      this.toggleProperty('isOpen');
    },
  },
});
