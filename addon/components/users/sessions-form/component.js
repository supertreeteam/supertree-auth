import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  errorMessage: '',
  rememberMe: false,
  isPending: false,

  // change the store's cookie expiration time depending on whether 'remember me' is checked or not
  rememberMeChanged: Ember.observer('rememberMe', function () {
    const fourteenDays = 1209600;
    const expiration = this.get('rememberMe') ? fourteenDays : null;

    this.set('session.store.cookieExpirationTime', expiration);
  }),

  actions: {
    login() {
      this.set('isPending', true);
      this.set('errorMessage', '');
      let errorMessage;

      this.get('session').authenticate('authenticator:devise', this.get('identification'), this.get('password')).then(
        () => {
          this.set('isPending', false);
        },
        () => {
          this.set('isPending', false);
          errorMessage = this.get('i18n').t('validation.auth.invalidCredentials');
          this.set('errorMessage', errorMessage);
        }
      );
    },
  },
});
