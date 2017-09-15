import DS from 'ember-data';

export default DS.Model.extend({
  taskName: DS.attr('string'),
  taskType: DS.attr('number'),
  title: DS.attr('string'),
  introText: DS.attr('string'),
  fullText: DS.attr('string'),
  board: DS.attr('string')
});
