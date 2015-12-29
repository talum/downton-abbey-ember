import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('characters', function() {
    this.route('character', {
      path: ':character_id'
    });
    this.route('new');
  });
  this.route('quotes', function() {
    this.route('quote', {
      path: ':quote_id'
    });
    this.route('new');
  });
});

export default Router;
