import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params){
    return Ember.RSVP.hash({
      character: this.store.findRecord('character', params.character.id)
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
