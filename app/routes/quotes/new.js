import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('quote');
  }, 
  actions:{
    save: function(model){
      model.save().then((quote) => {
        this.transitionTo('quotes.index');
      });
    }
  }
});
