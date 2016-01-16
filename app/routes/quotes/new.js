import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
  },
  resetController(controller, isExiting){
    if(isExiting){
      var quote = controller.get('quote');
      if(quote.get('isNew')){
        quote.destroyRecord();
      }
    }
  }
});