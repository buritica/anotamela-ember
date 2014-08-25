import DS from 'ember-data';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.irregular('nota', 'notas');
inflector.singular(/nota/, 'nota');

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  language: DS.attr('string'),
  body: DS.attr('string')
});
