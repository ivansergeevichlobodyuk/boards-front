import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      task: this.get('store').peekRecord('task',params.task_id),
      board: this.get('store').findAll('board'),
    });
  },

});
