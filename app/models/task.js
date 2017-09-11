import DS from 'ember-data';

export default DS.Model.extend({
  taks_name: DS.attr('string'),
  taks_type: DS.attr('number'),
  title: DS.attr('string'),
  board_id: DS.belongsTo('board')
});
