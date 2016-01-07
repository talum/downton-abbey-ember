import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['name:asc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties')
});
