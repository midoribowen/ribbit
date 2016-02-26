import Ember from 'ember';

export default Ember.Component.extend({

  sortProperties: ['timestamp:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortProperties'),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },

    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    },

    saveAnswer(answer, params) {
      this.sendAction('saveAnswer', answer, params);
    },
  }
});
