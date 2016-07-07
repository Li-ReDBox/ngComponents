angular.module('myApp').
  component('greetUser', {
    template: 'Hello, {{$ctrl.user}}! <button ng-click="$ctrl.doSomething()">try me</button>',
    controller: function GreetUserController() {
      var ctrl = this;
      if (angular.isDefined(this.inuser)) {
        this.user = this.inuser;
        console.log(this.user);
      } else {
        this.user = 'world: not available';
      }
      ctrl.doSomething = function() {
        console.log("We can do things...");
        ctrl.bridge({data: 'string'});
      };
    },
    bindings: {
      inuser: '@',
      bridge: '&'
    },
});
