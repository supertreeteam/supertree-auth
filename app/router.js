import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('user', function () {
    this.route('passwords', function () {
      this.route('edit');
    });

    this.route('sessions', function () {
      this.route('new');
    });
  });

  this.route('logout');
});

export default Router;
