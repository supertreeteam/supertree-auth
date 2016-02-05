import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/textarea-group', 'Integration | Component | forms/textarea group', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{forms/textarea-group}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#forms/textarea-group}}
      template block text
    {{/forms/textarea-group}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
