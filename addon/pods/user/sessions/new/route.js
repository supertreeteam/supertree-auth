import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  resetController(controller, isExiting/*, transition*/) {
    if (isExiting) {
      controller.setProperties({
        identification: '',
        password: '',
        errorMessage: '',
      });
    }
  },
});
