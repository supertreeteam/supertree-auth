import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  useInputGroup: computed.or('addonLeftIcon', 'addonRightIcon'),
});
