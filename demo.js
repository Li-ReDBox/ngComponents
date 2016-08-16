var child = [
    {"id": 10, "name": "Learn JavaScript2" },
    {"id": 20, "name": "Learn Vue.js2"},
    {"id": 30, "name": "Build Something Awesome2"}
  ],
  grandchild = [
    {id: 100, name: "Learn JavaScript 3"},
    {id: 200, name: "Learn Vue.js 3"},
    {id: 300, name: "Build Something Awesome 3"}
  ];

var level1Data = [
    {id: 1, name: 'Learn JavaScript'},
    {id: 2, name: 'Learn Vue.js'},
    {id: 3, name: 'Build Something Awesome'}
  ], level2Data = {"1": child}, level3Data = {"20": grandchild};

var demo = angular.module('demo', ['mereUI']);
demo.controller('main', ['$scope', function($scope) {
  $scope.pickers = [{
    title: 'start',
    class: 'col-md-3',
    date: new Date('2016-05-01'),
    minDate: new Date(2016, 4, 1)
  }, {
    title: 'end',
    class: 'col-md-3',
    date: new Date()
  }];

  // datePickerUib
  $scope.getDates = function(dates) {
    console.log(dates);
    // Assume we have only two, and 0 should earlier than 1:
    if (dates[0] > dates[1]) {
      alert(dates[0] + " is later than " + dates[1]);
    }
  };

  // casDropdowns
  var casSpy;  // function alias of the spy inside the component
  $scope.setSpy = function(spy) {
    casSpy = spy;
  };
  $scope.showSpyReport = function() {
    // we call our spy to report back
    console.log("Our spy says: ", casSpy());
  }
  $scope.messenger = function(idsx) {
    // component calls our messenger to report
    console.log("component reports: ", idsx);
  };
  $scope.levelData = [level1Data, level2Data, level3Data];
}]);
