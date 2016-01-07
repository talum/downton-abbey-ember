import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["q"],
  q: null,

  filteredResults: Ember.computed('model.@each.name', 'q', function(){
    let characters = this.get('model');
    let query = this.get('q');
    if(query){
      let pattern = new RegExp(`^.*?${query}.*?$`,"i");
      return characters.filter(c => c.get('name').match(pattern));
    } else{
      return characters;
    }
  })
});
