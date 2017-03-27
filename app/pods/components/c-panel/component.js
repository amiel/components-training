import Ember from 'ember';

export default Ember.Component.extend({
  title: 'Default block',
  body: 'Default body',

  isOpen: true,

  'on-click-title': null,

  actions: {
    toggleBody() {
      const fn = this.get('on-click-title');

      if (fn) {
        fn();
      } else {
        this.toggleProperty('isOpen');
      }
    },
  },
});
