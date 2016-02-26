import DS from 'ember-data';

export default DS.Model.extend({
  ribbit: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  timestamp: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
