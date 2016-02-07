export function initialize(app) {
  app.inject('component', 'i18n', 'service:i18n');
  app.inject('route', 'i18n', 'service:i18n');
}

export default {
  name: 'i18n',
  initialize: initialize,
};

