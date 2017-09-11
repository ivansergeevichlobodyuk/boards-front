import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://boards-api.sys/app_dev.php/'
});
