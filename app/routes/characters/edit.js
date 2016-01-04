import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      character: this.store.findRecord('character', params.character_id)
    }); 
  }, 
  setupController(controller, models){
    controller.set('character', models.character);
    controller.set('actor', models.actor);
  },
  actions: {
    save: function(character, actor){
      character.save().then((character) => {
        this.transitionTo('characters.character', character)
      });
    }, 
    cancel: function(){
      this.transitionTo("characters.character", this.get('model'));
  }
}
});
