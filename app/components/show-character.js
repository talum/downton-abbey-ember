import Ember from 'ember';

export default Ember.Component.extend({
   doubleClick() {
      this.toggleProperty('isEditing');
    },
  actions: {
    update() {
      this.toggleProperty('isEditing');
      this.attrs.update();
    },
  isEditing: false,
  }
});
