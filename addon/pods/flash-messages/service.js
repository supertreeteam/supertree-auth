import FlashMessagesService from 'ember-cli-flash/services/flash-messages';
import Ember from 'ember';

export default FlashMessagesService.extend({
  i18n: Ember.inject.service(),
  i18nSuccess(key) {
    return this.success(this.get('i18n').t(key));
  },
});
