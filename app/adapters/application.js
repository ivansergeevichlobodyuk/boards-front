import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
//     host: 'http://lar.sys',
//     namespace: 'api',
// });

// export default DS.RESTAdapter.extend({
//     host: 'http://lar.sys',
//     namespace: 'api'
// })


export default DS.JSONAPIAdapter.extend({
  host: 'http://lar.sys',
  namespace: 'api',



})
