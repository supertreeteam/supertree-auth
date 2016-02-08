import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Service.extend({
  store: service(),
  session: service(),

  fetchUsers: Ember.on('init', function() {
    this.get('store').findAll('user').then((users) => {
      this.set('users', users);
    });
  }),

  loadCurrentUser() {
    if (!this.get('session.user')) {
      const authenticated = this.get('session.isAuthenticated');
      let userId = this.get('session.data.authenticated.id');

      if (authenticated) {
        this.get('store').findRecord('user', userId).then((user) => {
          return this.set('session.user', user);
        });
      }
    }
  },

  activeUsers: Ember.computed.filterBy('users', 'lastSignInAt'),
});
