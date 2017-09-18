import Ember from 'ember';
export default Ember.Component.extend({

  store: Ember.inject.service(),
  showEdit: false,
  validationData: new Array(),
  susccessEdited(){
    this.toggleProperty('showEdit');
    UIkit.notify("Board name was changed");

  },
  actions:{
    editBoard(){
      this.toggleProperty('showEdit');
    },
    saveBoard(item){
      var _this = this;
      item.save().then( ()=> {
        this.susccessEdited();
        this.set('validationData', new Array());
      },() =>{
        var validation = new Array();
        console.log("errors ",item.get('errors.name'));
         item.get('errors.name').forEach(function(val,inx){
           validation[val.attribute] = val.message;
         });
         this.set('validationData', validation);
      });
    }
  }
});
