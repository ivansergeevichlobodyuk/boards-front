import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      task: this.get('store').createRecord('task',{'board':1}),
      board: this.get('store').findAll('board')
    });
  },

});
