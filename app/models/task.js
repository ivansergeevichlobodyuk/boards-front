import DS from 'ember-data';

export default DS.Model.extend({
  taskName: DS.attr('string'),
  taskType: DS.attr('number'),
  taskTitle: DS.attr('string'),
  taskIntro: DS.attr('string'),
  taskfullText: DS.attr('string'),
  board: DS.belongsTo('board')
});
