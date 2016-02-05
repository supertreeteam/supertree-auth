import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  currentUser: Ember.inject.service('current-user'),
  sessionAuthenticated: Ember.on('session.authenticationSucceeded', function () {
    this.get('currentUser').loadCurrentUser();
    this.transitionTo('board.index');
  }),

  model() {
    if (this.get('session.isAuthenticated')) {
      this.get('currentUser').loadCurrentUser();
    }
  },
});
