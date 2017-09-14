import Ember from 'ember';

export default Ember.Component.extend({
  someVar: 'Some var',
  tasksList: '',
  store: Ember.inject.service(),
  actions:{

  addTaskToBoard(data){
      console.log();
  }}

});
