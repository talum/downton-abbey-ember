import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const {service} = Ember.inject;

export default Ember.Route.extend(UnauthenticatedRouteMixin,{
  session: service('session'),
  actions: {
    authenticate: function(){
      let { identification, password } = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
