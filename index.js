/* jshint node: true */
'use strict';

module.exports = {
  name: 'supertree-auth',

  included: function(app) {
    this._super.included(app);

    // Nested Addons don't contribute to the Host Application filestructure.
    // To ensure the initializers from core and checkouts are run, we include
    // them as dependencies rather than devDependencies, and manually invoke
    // the Addon included hooks as necessary.
    this.addons.forEach(function(addon){
      if (addon.name.substring(0, 11) === "ember-simple-auth") {
        addon.included.apply(addon, [app]);
      }
    });

    app.import('node_modules/ember-simple-auth/index.js');

  }
};
