import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    delete: function (nota) {
      nota.destroyRecord();
    }
  }
});

