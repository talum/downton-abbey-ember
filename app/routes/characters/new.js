import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      character: this.store.createRecord('character'), 
      actor: this.store.createRecord('actor')
    }); 
  }, 
  setupController(controller, models){
    controller.set('character', models.character);
    controller.set('actor', models.actor);
  },
  actions: {
    cancel: function(){
      this.transitionTo("characters");
    }
  }
});
