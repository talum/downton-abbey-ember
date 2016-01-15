import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(UnauthenticatedRouteMixin, {

  model(){
    return this.store.findAll('character');
  }, 
  session: service('session'),
  actions: {
    logout(){
      this.get('session').invalidate();
    }
  }
});
