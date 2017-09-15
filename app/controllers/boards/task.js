import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    submition(){
      let tasks = this.store.createRecord('task', {
        "taskName": this.get('model.task.taskName'),
        "taksType": this.get('model.task.taksType'),
        "title": this.get('model.task.title'),
        "introText": this.get('model.task.introText'),
        "fullText": this.get('model.task.fullText'),
        "board": this.get('model.task.board'),
      });

      tasks.save().then(() => {
        this.get('store').findAll('board');
        UIkit.notify("New board was added");
        this.transitionToRoute('boards');
      }
    );
    },
    selectBoard(){
      this.set('model.task.board',$("#tag-type-select").find(":selected").val());
    }
  }

});