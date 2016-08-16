var myapp = angular.module('mereUI', ['ui.bootstrap']);
myapp.controller('main', ['$scope', function($scope) {
  $scope.inuser = {name: "myself"};
  $scope.updateHero = function(data) {
    console.log("getout is called");
    console.log(data);
  };
  $scope.pickers = [{title: 'start', date: new Date('2016-06-01')},
                    {title: 'end', class: 'col-md-3'}];

  $scope.getDates = function(dates) {
    console.log(dates);
    // Assume we have only two, and 0 should earlier than 1:
    if (dates[0] > dates[1]) {
      alert(dates[0] + " is later than " + dates[1]);
    }
  }
}]);
