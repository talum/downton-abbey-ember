import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return this.store.createRecord('quote');
    return Ember.RSVP.hash({
      quote: this.store.createRecord('quote'),
      characters: this.store.findAll('character'),
      seasons: this.store.findAll('season')
    });
  }, 
  setupController(controller, models){
    controller.set('quote', models.quote);
    controller.set('characters', models.characters);
    controller.set('seasons', models.seasons);
  }
});