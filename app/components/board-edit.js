import Ember from 'ember';
export default Ember.Component.extend({

  store: Ember.inject.service(),
  showEdit: false,

  actions:{
    editBoard(){
      this.toggleProperty('showEdit');
    },

    saveBoard(item){
      item.save().then(function(){
        this.toggleProperty('showEdit');
        UIkit.notify("Board name was changed");
      })
      this.toggleProperty('showEdit');
    }

  }

});
