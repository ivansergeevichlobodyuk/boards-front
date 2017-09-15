import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submition(){
       console.log('model task ', this.get('model.task'));
        this.get('model.task').save().then(() => {
          this.get('store').findAll('board');
          UIkit.notify("New board was added");
          this.transitionToRoute('boards');
    })},

    selectBoard(){
      this.set('model.task.board',$("#tag-type-select").find(":selected").val());
    }
  }
});
