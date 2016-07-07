var myapp = angular.module('myApp', []);
myapp.controller('main', ['$scope', function($scope) {
  $scope.inuser = {name: "myself"};
  $scope.updateHero = function(data) {
    console.log("getout is called");
    console.log(data);
  }
}]);
