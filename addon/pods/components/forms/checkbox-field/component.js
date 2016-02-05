import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  classNames: 'checkbox-field',
  classNameBindings: ['disabled:disabled', 'checked:checked'],
  checked: null,
  labelClass: 'checkbox-label',

  click() {
    if (!this.get('disabled')) {
      if (this.get('action')) {
        this.sendAction('action', this.get('checked'));
      } else {
        this.toggleProperty('checked');
      }
    }
  },
});
