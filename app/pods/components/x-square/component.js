import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['X-square', 'flyable'],
  classNameBindings: ['isOpen:flyable-open'],
});
