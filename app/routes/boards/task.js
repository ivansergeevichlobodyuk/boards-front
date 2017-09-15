import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      task: this.get('store').createRecord('task',{'board':1}),
      board: this.get('store').findAll('board'),
      boardItem: this.get('store').findRecord('board',params.board_id)
    });
  },

});
