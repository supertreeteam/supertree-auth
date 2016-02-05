import Ember from 'ember';
import { raw as ajax } from 'ic-ajax';

export default Ember.Component.extend({
  isPending: false,

  actions: {
    updatePassword() {
      this.set('isPending', true);
      const flashMessages = Ember.get(this, 'flashMessages');
      const url = '/api/users/password';
      let data = {
        user: {
          password:              this.get('password'),
          password_confirmation: this.get('passwordConfirmation'),
          reset_password_token:  this.get('resetPasswordToken'),
        },
      };
      ajax(url, {
        method: 'PUT',
        data: data,
      }).then(
        () => {
          this.set('isPending', false);
          flashMessages.i18nSuccess('users.password.edit.success');
          this.get('session').authenticate('authenticator:devise', this.get('identification'), this.get('password'));
        },
        (error) => {
          this.set('isPending', false);
          flashMessages.danger(error.jqXHR.responseJSON['error']);
        }
      );
    },
  },
});
