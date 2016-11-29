App = Ember.Application.create();
App.IndexRoute = Ember.Route.extend({
  model: function () {
    return {
      "foo":'bar'
    };
  }
});
App.IndexController = Ember.ObjectController.extend({
  display: Ember.computed(function() {
    return this.get('foo');
  }).property('foo'),
  
  actions: {
    forceChange: function(){
      this.notifyPropertyChange('foo');
    }
  }
});


App.MyComponentComponent =  Ember.Component.extend({
  
  didInsertElement: function() {
    var controller = this.get('targetObject'); 
    controller.addObserver('foo', this, this.onDataChange);
  },
  
  display: Ember.computed(function() {
    return this.get('data');
  }).property('data'),
  
  onDataChange: function(){
    console.log("THIS FIRED!");
  }.observes('data'),

  actions: {
    insideClick: function(){
      this.set('data.underneath','foobar');
    }
  }
});