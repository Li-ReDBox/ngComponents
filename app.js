var myapp = angular.module('myApp', ['ui.bootstrap']);
myapp.controller('main', ['$scope', function($scope) {
  $scope.inuser = {name: "myself"};
  $scope.updateHero = function(data) {
    console.log("getout is called");
    console.log(data);
  };
  $scope.uis = [{title: 'start', class: 'col-md-3'},
                {title: 'end', class: 'col-md-3'}];
}]);
