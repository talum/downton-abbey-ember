import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  timePeriod: DS.attr('string'),
  imageURL: DS.attr('string'),
  episodes: DS.hasMany('episode', {async: true})  
});
