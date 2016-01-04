import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    update(character){
      character.save();
    }
  }
});
