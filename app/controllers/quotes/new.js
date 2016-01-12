import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'quote.description',
    'quote.context',
    'quote.character',
    'quote.episode',
    {
      get(){
        return !Ember.isEmpty(this.get('quote.description')) &&
        !Ember.isEmpty(this.get('quote.context')) &&
        !Ember.isEmpty(this.get('quote.character')) &&
        !Ember.isEmpty(this.get('quote.episode'))
      }
    }
  ), 
  actions:{
    save: function(){
      if (this.get('isValid')){
        let quote = this.get('quote');
        quote.save().then((quote) => {
          this.transitionTo('quotes.index');
        });
      }
      else{
        this.set('errorMessage', "Please fill in all fields.")
      }
    }, 
    cancel: function(){
      this.transitionTo('quotes');
    }
  }
});
