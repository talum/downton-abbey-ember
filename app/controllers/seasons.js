import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['name:asc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties'), 
  season: null,
  actions:{
    selectSeason(seasonParams){
      let season = this.store.findRecord('season', seasonParams);
      this.transitionToRoute("seasons.season", season);
    }
  }
});
