import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    if (!this.get('session.user')) {
      const authenticated = this.get('session.isAuthenticated');
      let userId = this.get('session.data.authenticated.id');
      if (authenticated) {
        this.get('store').find('user', userId).then((user) => {
          return this.set('session.user', user);
        });
      }
    }
  },
});
