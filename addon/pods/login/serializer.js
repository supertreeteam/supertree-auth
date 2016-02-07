import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    firstName:    { serialize: false },
    lastName:     { serialize: false },
  },
});
