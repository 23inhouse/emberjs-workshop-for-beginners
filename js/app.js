// Welcome to Ember.js Beginners Workshop

App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.PROJECT_FIXTURES;
  }
})
