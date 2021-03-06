import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  displayName: Ember.computed('firstName', 'lastName', function () {
    return [this.get('firstName'), this.get('lastName')].compact().join(' ');
  }),
});
