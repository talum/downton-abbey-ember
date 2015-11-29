import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  socialClass: DS.attr('string'),
  quotes: DS.hasMany('quote', {async: true})
});
