import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://boards-api.sys/app_dev.php',
    namespace: 'api',
});
