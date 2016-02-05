import Ember from 'ember';
import { raw as ajax } from 'ic-ajax';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  isPending: false,

  validate() {
    this.set('isValidated', true);
    return this._super.apply(this, arguments);
  },

  actions: {
    acceptInvite() {
      this.set('isPending', true);
      let successValidation = () => {
        const url = '/api/users/invitations';
        let data = {
          user: {
            password: this.get('password'),
            password_confirmation: this.get('passwordConfirmation'),
            invitation_token: this.get('invitationToken'),
          },
        };

        let successInvite = () => {
          Ember.get(this, 'flashMessages').i18nSuccess('users.invitation.accept.success');
          this.get('session').authenticate('authenticator:devise', this.get('email'), this.get('password'));
          this.set('isPending', false);
        };

        let failInvite = (error) => {
          this.set('isPending', false);
          this.set('serverErrorMessage', error.jqXHR.responseJSON['error']);
        };

        ajax(url, {
          method: 'PUT',
          data: data,
        }).then(successInvite, failInvite);
      };

      this.validate().then(successValidation, () => {
        this.set('isPending', false);
      });
    },
  },

  validations: {
    password: {
      presence: true,
      confirmation: true,
      length: {
        minimum: 8,
      },
    },
    passwordConfirmation: { presence: true },
  },
});
