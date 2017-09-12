import DS from 'ember-data';

export default DS.Model.extend({
  taksName: DS.attr('string'),
  taksType: DS.attr('number'),
  title: DS.attr('string'),
  introText: DS.attr('string'),
  fullText: DS.attr('string')
});
