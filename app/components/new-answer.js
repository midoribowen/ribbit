import Ember from 'ember';

export default Ember.Component.extend({
  answerFormShow: false,
  actions: {
    answerFormShow() {
      this.set('answerFormShow', true);
    },
    saveAnswer() {
      var params = {
        ribbit: this.get('ribbit'),
        author: this.get('author'),
        question: this.get('question'),
        timestamp: new Date().getTime(),
      };
      this.set('answerFormShow', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
