import DS from 'ember-data';

export default DS.Model.extend({
  ribbit: DS.attr(),
  author: DS.attr(),
  timestamp: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
