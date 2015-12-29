import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('character');
  }, 
  actions: {
    save: function(model){
      model.save().then((character) => {
        this.transitionTo('characters.character', character)
      });
    }, 
    cancel: function(){
      this.transitionTo("characters");
    }
  }
});
