import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/checkbox-field', 'Integration | Component | forms/checkbox field', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{forms/checkbox-field}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#forms/checkbox-field}}
      template block text
    {{/forms/checkbox-field}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
