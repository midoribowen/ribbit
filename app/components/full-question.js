import Ember from 'ember';

export default Ember.Component.extend({

  sortProperties: ['timestamp:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortProperties'),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    saveAnswer(answer, params) {
      this.sendAction('saveAnswer', answer, params);
    },
  }
});
