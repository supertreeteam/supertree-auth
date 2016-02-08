import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  fetchUsers: Ember.on('init', function() {
    const users = this.get('store').findAll('user');
    this.set('users', users);
  }),

  activeUsers: Ember.computed.filterBy('users', 'lastSignInAt'),
});
