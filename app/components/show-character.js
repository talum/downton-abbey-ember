import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
   doubleClick() {
    if (this.get('session').get('isAuthenticated')){
      this.toggleProperty('isEditing');
    }
    },
  actions: {
    update() {
      this.toggleProperty('isEditing');
      this.attrs.update();
    },
  isEditing: false,
  }
});
