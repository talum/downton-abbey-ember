import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return this.store.createRecord('quote');
    return Ember.RSVP.hash({
      quote: this.store.createRecord('quote'),
      characters: this.store.findAll('character')
    });
  }, 
  setupController(controller, models){
    controller.set('quote', models.quote);
    controller.set('characters', models.characters);
  },
  actions:{
    save: function(quote){
      quote.save().then((quote) => {
        this.transitionTo('quotes.index');
      });
    }, 
    cancel: function(){
      this.transitionTo('quotes');
    }
  }
});
