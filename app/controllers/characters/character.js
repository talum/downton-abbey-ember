import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    update(){
      var character = this.get('model');
      character.save();
    }
  }
});
