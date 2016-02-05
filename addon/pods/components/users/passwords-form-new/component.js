import Ember from 'ember';
const { computed } = Ember;
import { raw as ajax } from 'ic-ajax';

export default Ember.Component.extend({
  isPending:    false,
  emailBlank:   computed.not('email'),
  disableReset: computed.or('isPending', 'emailBlank'),

  actions: {
    resetPassword() {
      this.set('isPending', true);
      const flashMessages = Ember.get(this, 'flashMessages');
      const url = '/api/users/password';
      let data = { user: { email: this.get('email') } };
      ajax(url, {
        method: 'POST',
        data: data,
      }).then(
        () => {
          this.set('isPending', false);
          flashMessages.i18nSuccess('users.password.new.success');
          this.sendAction('goToLogin');
        },
        (error) => {
          this.set('isPending', false);
          flashMessages.danger(error.jqXHR.responseJSON['error']);
        }
      );
    },
  },
});
