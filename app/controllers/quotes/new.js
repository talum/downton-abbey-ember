import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('quote.description'),
  hasContext: Ember.computed.notEmpty('quote.context'),
  hasCharacter: Ember.computed.notEmpty('quote.character.id'),
  hasEpisode: Ember.computed.notEmpty('quote.episode.id'),
  isValid: Ember.computed.and(
    'hasDescription',
    'hasContext',
    'hasCharacter',
    'hasEpisode'
  ), 
  sortProperties: ['name:asc'],
  sortedSeasons: Ember.computed.sort('seasons', 'sortProperties'), 
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
