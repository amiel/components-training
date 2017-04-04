import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['flyable', 'x-flyable'],
  classNameBindings: ['isOpen:flyable-open'],
});
