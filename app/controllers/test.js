import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    login: function() {
      var user = this.store.createRecord('user', {
        id: 'abc'
      });
      user.set('operation', 'login');
      user.set('password', 'arq3');
      user.save().then(function(user) {
        console.log(user.get('name'));
      }, function(error) {
        console.log(error);
      });
    }
  }
});
