import Ember from 'ember';

export default Ember.Controller.extend({
 actions:{
  update(){
    var season = this.get('model');
    season.save();
  }
}
});
