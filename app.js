var myapp = angular.module('myApp', ['ui.bootstrap']);
myapp.controller('main', ['$scope', function($scope) {
  $scope.inuser = {name: "myself"};
  $scope.updateHero = function(data) {
    console.log("getout is called");
    console.log(data);
  };
  $scope.pickers = [{title: 'start', class: 'col-md-3', date: new Date('2016-06-01')},
                {title: 'end', class: 'col-md-3', date: new Date()}];

  $scope.getDates = function(dates) {
    console.log(dates);
  }
}]);
