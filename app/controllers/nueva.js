import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    submit: function() {
      console.log('submit');
      return false;
    }
  }
});
