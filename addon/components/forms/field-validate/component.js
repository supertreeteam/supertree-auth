import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  tagName: '',

  disableErrorOnInit: Ember.on('didInsertElement', function () {
    this._super();
    this.set('error', null);
  }),
});
