import Ember from 'ember';

export default Ember.Controller.extend({
  hasName: Ember.computed.notEmpty('character.name'), 
  hasTitle: Ember.computed.notEmpty('character.title'),
  hasSocialClass: Ember.computed.notEmpty('character.socialClass'),
  hasImageUrl: Ember.computed.notEmpty('character.imageURL'),
  hasActorName: Ember.computed.notEmpty('actor.name'),
  isValid: Ember.computed.and(
    'hasName',
    'hasTitle',
    'hasSocialClass',
    'hasImageUrl',
    'hasActorName'
    ),
    actions:{
      save(){
        if (this.get('isValid')){
          let actor = this.get('actor');
          let character = this.get('character');
          actor.save().then((actor) => {
            character.set('actor', actor);
            character.save().then((character) => {
              this.transitionToRoute('characters.character', character);
            })
          })
        } else{
          this.set('errorMessage', "Please fill in all fields.");
      }
    }
  }
});
