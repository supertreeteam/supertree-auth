import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    if (this.get('session.isAuthenticated')) {
      this.get('session').invalidate();
    }
  },
});
