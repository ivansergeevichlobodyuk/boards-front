import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('boards', function() {
    this.route('new');
    this.route('task', {path:'/:board_id/tasks/new'});
    this.route('taskitem',{path: '/:board_id/tasks/edit/:task_id'});
  });

  this.route('board', {path: '/boards/:board_id/'}, function() {
    this.route('task', {path: '/task/:taks_id'}  );
  });

});

export default Router;
