import Ember from 'ember';

export default Ember.Controller.extend({
  deleteMode: false,

  actions:{
    update(){
      var character = this.get('model');
      character.save();
    }, 
    delete(){
      this.toggleProperty('deleteMode');
    },
    cancelDelete(){
      this.toggleProperty('deleteMode');
    },
    confirmDelete(){
      this.get('model').destroyRecord().then(()=> {
        this.toggleProperty('deleteMode');
        this.transitionToRoute('characters.index');
      });
    }
  }
});
