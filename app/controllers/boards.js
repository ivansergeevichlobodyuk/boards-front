import Ember from 'ember';

export default Ember.Controller.extend({
     queryParams: ['search'],

     filteredBoards: Ember.computed('search', function() {
        var search = this.get('category');
        var boards = this.get('model');
        console.log('boards ', boards);
        if (search) {
          return boards.filterBy('name', search);
        } else {
          return boards;
        }
      }),


  });
