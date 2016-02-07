import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'user-avatar',
  value: Ember.computed('user', function () {
    const first = this.get('user.firstName');
    const last = this.get('user.lastName');

    if (first || last) {
      return [first.charAt(0), last.charAt(0)].join('');
    }
  }),
});
