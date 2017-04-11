import Ember from 'ember';

export default Ember.Component.extend({

  classNames: 'Carousel-slider',

  selectedIndex: 0,

  currentSlide: Ember.computed('selectedIndex', function() {
    return this.get('slides').get(this.get('selectedIndex'));
  }),

  displayShift: Ember.computed('selectedIndex', function() {
    let i = this.get('selectedIndex');
    let width = 80;
    let margin = 3;
    let offset = 15.5;

    let shifted = ((width + margin) * -i) + offset;

    return Ember.String.htmlSafe(`transform: translateX(${shifted}%)`);
  }),

  actions: {
    selectSlide(index) {
      this.set('selectedIndex', index);
    }
  }

});
