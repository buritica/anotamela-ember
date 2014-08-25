import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    submit: function() {
      console.log('submit');
      return false;
    }
  },
   aceInit: function(editor) {
    editor.setHighlightActiveLine(false);
    editor.setShowPrintMargin(false);
    editor.getSession().setTabSize(2);
    editor.getSession().setMode("ace/mode/javascript");
  }
});
