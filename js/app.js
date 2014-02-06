// Welcome to Ember.js Beginners Workshop

App = Ember.Application.create();

App.Router.map(function() {
  this.resource('project', { path: '/project/:id' })
})

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.PROJECT_FIXTURES;
  }
});

App.ProjectRoute = Ember.Route.extend({
  model: function(params) {
    return App.PROJECT_FIXTURES.findBy('id', params.id);
  }
});
