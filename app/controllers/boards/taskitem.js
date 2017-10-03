import Ember from 'ember';

export default Ember.Controller.extend({
  validationData: new Array(),
  init(){
    this._super(...arguments);

  },
  actions: {
    submition(){
      //this.set('model.task.board', $("#tag-type-select").find(":selected").val());
      let task = this.get('model.task');
      task.set('board', this.get('store').peekRecord('board', $("#tag-type-select").find(":selected").val()));
      task.save().then(() => {
          this.get('store').findAll('board');
          UIkit.notify("New board was added");
          this.transitionToRoute('boards');
          this.set('validationData', new Array());
        },
        (error) => {
           console.log('errrorrr ', error);
          // var validation = new Array();
          // error.errors.forEach(function (val, inx) {
          //   validation[val.source.pointer] = val.detail;
          // });
          // this.set('validationData', validation);
        }
      )
    },

    selectBoard( ){
      this.set('model.task.board', $("#tag-type-select").find(":selected").val());
    }

  }
});
