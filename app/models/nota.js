import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  type: DS.attr('string'),
  content: DS.attr('string')
});
