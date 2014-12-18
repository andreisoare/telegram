import DS from 'ember-data';

var Post = DS.Model.extend({
  author: DS.belongsTo('user', {async: true}),
  body: DS.attr(),
  created: DS.attr('date')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      author: 1,
      body: 'post 1',
      created: new Date(2014, 10, 1, 20, 15)
    },
    {
      id: 2,
      author: 2,
      body: 'post 1',
      created: new Date(2014, 10, 1, 20, 15)
    }
  ]
});

export default Post;
