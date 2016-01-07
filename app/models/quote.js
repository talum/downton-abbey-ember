import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  context: DS.attr('string'),
  character: DS.belongsTo('character', {async: true}),
  episode: DS.belongsTo('episode', {async: true})
});
