import Ember from 'ember';

export default Ember.Component.extend({
  lang: {
    preview: 'Preview',
    editor: 'Editor',
    fullscreen: 'Click to toggle fullscreen',
  },

  doubleClick: function () {
    this.$().children().toggleClass('fullscreen');
  },

  drop: function (ev) {
    ev.preventDefault();
    this.sendAction('upload', ev);
    Ember.debug('you dropped something');
  },

  dragEnter: function () {
    this.$('.em-markdown-editor').addClass('drop-file-enter');
  },

  dragLeave: function () {
    this.$('.em-markdown-editor').removeClass('drop-file-enter');
  },

  dragOver: function () {
    this.$('.em-markdown-editor').addClass('drop-file-enter');
  },

  actions: {
    toggleFullscreen: function () {
      this.doubleClick();
    },
  },
});
