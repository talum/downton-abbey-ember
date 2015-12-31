import DS from 'ember-data';

export default DS.Model.extend({
  summary: DS.attr('string'),
  timePeriod: DS.attr('string'),
  episodes: DS.hasMany('episode', {async: true})  
});
