import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  season: DS.belongsTo('season', {async: true}),
  imageURL: DS.attr('string'),
  quotes: DS.hasMany('quote', {async: true})
});
