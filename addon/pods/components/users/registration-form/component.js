import Ember from 'ember';
import { raw as ajax } from 'ic-ajax';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  errorMessage: '',
  isPending: false,

  validate() {
    this.set('isValidated', true);
    return this._super.apply(this, arguments);
  },
  actions: {
    register() {
      this.set('isPending', true);
      let successValidation = () => {
        const url = '/api/users/registrations';
        let data = {
          user: {
            password: this.get('password'),
            password_confirmation: this.get('passwordConfirmation'),
            email: this.get('identification'),
            first_name: this.get('firstName'),
            last_name: this.get('lastName'),
          },
        };

        let successRegistration = () => {
          Ember.get(this, 'flashMessages').i18nSuccess('registrations.new.success');
          this.get('session').authenticate('authenticator:devise', this.get('identification'), this.get('password'));
          this.set('isPending', false);
        };

        let failRegistration = (error) => {
          this.set('isPending', false);
          this.set('serverErrorMessage', error.jqXHR.responseJSON['error']);
        };

        ajax(url, {
          method: 'POST',
          data: data,
        }).then(successRegistration, failRegistration);
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
    identification: { presence: true },
  },
});
