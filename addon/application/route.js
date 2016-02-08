import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  userService: Ember.inject.service('user'),
  sessionAuthenticated: Ember.on('session.authenticationSucceeded', function () {
    this.get('userService').loadCurrentUser();
  }),

  model() {
    if (this.get('session.isAuthenticated')) {
      this.get('userService').loadCurrentUser();
    }
  },
});
