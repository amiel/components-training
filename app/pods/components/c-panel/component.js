import Ember from 'ember';

export default Ember.Component.extend({
  title: 'Default block',
  body: 'Default body',

  isOpen: true,

  'on-click-title'() { return true; } ,

  actions: {
    toggleBody() {
      const fn = this.get('on-click-title');

      if (fn()) {
        this.toggleProperty('isOpen');
      }
    },
  },
});
