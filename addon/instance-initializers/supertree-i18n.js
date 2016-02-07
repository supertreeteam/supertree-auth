import en from 'supertree-auth/locales/en/translations';

export default {
  name: 'supertree-i18n',
  initialize: function({ container }) {
    const i18n = container.lookup('service:i18n');
    i18n.addTranslations('en', en);
  },
};
