import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'character.name',
    'character.title',
    'character.socialClass',
    'character.imageURL', 
    'actor.name',
    {
      get(){
        return !Ember.isEmpty(this.get('character.name')) &&
          !Ember.isEmpty(this.get('character.title')) &&
          !Ember.isEmpty(this.get('character.socialClass')),
          !Ember.isEmpty(this.get('character.imageURL')) &&
          !Ember.isEmpty(this.get('actor.name'))
        }
     }
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
