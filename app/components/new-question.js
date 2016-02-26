import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        ribbit: this.get('ribbit'),
        author: this.get('author'),
        notes: this.get('notes'),
        timestamp: new Date().getTime(),
      };
      this.set('addNewQuestion', false),
      this.sendAction('saveQuestion', params);
    }
  }
});
