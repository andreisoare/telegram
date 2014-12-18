import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr()
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "Andrei"
    },
    {
      id: 2,
      name: "Soare"
    }
  ]
});

export default User;
