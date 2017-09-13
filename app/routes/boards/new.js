import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('board');
  },

  actions: {
    submition(){
      let board = this.store.createRecord('board', {
        "name": this.controller.get('model.name'),
        "count": 1,
      });

      board.save().then(() => {
          this.transitionTo('boards');
        }
      );
    }
  }

});
