import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(model){
      model.save().then((character) => {
        this.transitionTo('characters.character', character)
      });
    }, 
    cancel: function(){
      this.transitionTo("characters.character", this.get('model'));
  }
}
});
