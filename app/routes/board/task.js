import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    console.log('params ', params);
    // return this.get('store').findRecord('board',params.board_id);
  }


});
