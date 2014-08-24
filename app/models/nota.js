import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  language: DS.attr('string'),
  body: DS.attr('string')
});
