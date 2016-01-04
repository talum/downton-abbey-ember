import Ember from 'ember';

export default Ember.Route.extend({
   model(){
  }, 
  actions:{
    delete(character){
      character.destroyRecord().then(()=>
        this.transitionTo('characters.index'));
    }
  }
});
