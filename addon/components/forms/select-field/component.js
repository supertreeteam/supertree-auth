import Ember from 'ember';

export default Ember.Component.extend({
  // filteredCollection: Ember.computed.oneWay('collection'),
  // _filter(query) {
  //   return Ember.RSVP.resolve(this.get('collection').filter((object) => {
  //     return object.get('title').toLowerCase().indexOf(query.toLowerCase()) >= 0;
  //   }));
  // },

  actions: {
    onSelect: function (value, sb) {
      const selected = this.get('collection').findBy('id', value);
      this.set('value', selected);
      sb.close();
    },

    // filter(query) {
    //   return this._filter(query).then((filtered) => {
    //     this.set('filteredCollection', filtered);
    //     return filtered;
    //   });
    // },

    close(e, sb) {
      sb.close();
    },

    pressedUp(e, sb) {
      sb.navigateOptionsUp();
    },

    pressedDown(e, sb) {
      sb.navigateOptionsDown();
    },
  },
});
