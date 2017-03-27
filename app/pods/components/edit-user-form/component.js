import Ember from 'ember';

export default Ember.Component.extend({
  user: null,

  actions: {
    save() {
      this.get('user').save();
    },
  },
});
