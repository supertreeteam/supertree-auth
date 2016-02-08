import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  tagName: 'button',
  classNames: 'el-button--primary',
  classNameBindings: ['isDisabled:disabled'],
  isDisabled: false,

  click() {
    this.sendAction();
  },
});
