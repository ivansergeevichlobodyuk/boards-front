import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('boards', function() {
    this.route('new');
    this.route('task');
  });

  this.route('board', {path: '/boards/:board_id/'}, function() {
    this.route('task');
  });

});

export default Router;
