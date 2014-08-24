import Ember from 'ember';

var Router = Ember.Router.extend({
  location: AnotamelaENV.locationType
});

Router.map(function() {
  this.route('nueva');
});

export default Router;
