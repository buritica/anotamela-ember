import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    create: function() {
      var nota = this.get('model');
      nota.save();
      this.transitionToRoute('notas');
    },
    cancel: function() {
      var nota = this.get('model');
      nota.deleteRecord();
      this.transitionToRoute('notas');
    }
  },
  aceInit: function(editor) {
    editor.setHighlightActiveLine(false);
    editor.setShowPrintMargin(false);
    editor.getSession().setTabSize(2);
    editor.getSession().setMode("ace/mode/javascript");
  }
});
