import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(model) {
      model.destroyRecord().then(() => {
        this.transitionTo('characters.index');
      });
    }
  }
});
