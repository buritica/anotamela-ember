import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    update: function () {
      var nota = this.get('model');
      nota.save().then(function() {
        this.transitionToRoute('notas');
      }.bind(this));
    },
    delete: function () {
      var nota = this.get('model');
      nota.deleteRecord();
      nota.save().then(function() {
        this.transitionToRoute('notas');
      }.bind(this));
    }
  },
  aceInit: function(editor) {
    editor.setHighlightActiveLine(false);
    editor.setShowPrintMargin(false);
    editor.getSession().setTabSize(2);
    editor.getSession().setMode("ace/mode/javascript");
  }
});
