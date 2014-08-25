import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    create: function() {
      var nota = this.get('model');
      nota.save();
      return false;
    },
    update: function () {
      var nota = this.get('model');
      nota.save();
    },
    delete: function () {
      var nota = this.get('model');
      nota.deleteRecord();
      nota.save();
    }
  },
   aceInit: function(editor) {
    editor.setHighlightActiveLine(false);
    editor.setShowPrintMargin(false);
    editor.getSession().setTabSize(2);
    editor.getSession().setMode("ace/mode/javascript");
  }
});
