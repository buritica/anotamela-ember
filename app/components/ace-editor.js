import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.editor = window.ace.edit(this.get('element'));
    this.get('aceInit')(this.editor);
    var value = this.get('value');
    this.editor.getSession().setValue(value);
    this.editor.on('change', function(){
      this.set('value', this.editor.getSession().getValue());
    }.bind(this));
  },
  valueChanged: function () {
    if (!this.get('value')) {
      this.editor.getSession().setValue('');
    }
    else if (this.editor.getSession().getValue() !== this.get('value')) {
      this.editor.getSession().setValue(this.get('value'));
    }
  }.observes('value')
});
