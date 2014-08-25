import Ember from 'ember';

var Router = Ember.Router.extend({
  location: AnotamelaENV.locationType
});

Router.map(function() {
  this.resource('notas', {path: '/'}, function() {
    this.route('nueva');
  });

  this.resource('nota', {path: '/nota/:nota_id'});
  this.route('notas/nueva');
});

export default Router;
