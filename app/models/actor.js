import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imdbLink: DS.attr('string'),
  imageURL: DS.attr('string'),
  characters: DS.hasMany('character', {async: true})  
});
