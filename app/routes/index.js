import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question').then(function(questions) {
      return questions.sortBy('timestamp').reverse();
    });
  },

  actions: {
    saveQuestion(params) {
      var that = this;
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save().then(function() {
        that.transitionTo('index');
        that.refresh();
      });
    },
  }
});
