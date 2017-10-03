import Ember from 'ember';

export default Ember.Controller.extend({
     queryParams: ['search'],
     board: null,
     filteredBoards: Ember.computed('search', function() {
        var search = this.get('category');
        var boards = this.get('model');
        if (search) {
          return boards.filterBy('name', search);
        } else {
          return boards;
        }
      }),

     actions:{
       selectBoard(){
         this.set('model.board',$("#tag-type-select").find(":selected").val());
       }
     }
  });
