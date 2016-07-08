angular.module('myApp').
  component('dateRange', {
    templateUrl: 'components/daterange/daterange.html',
    controller: function DateRangeController() {
      var ctrl = this;
      console.log(ctrl.uis);
      ctrl.buttonTilte = "Open up";

      ctrl.collect = function (date) {
        // collect dates from child components
        console.log(date);
        var dates = [];
        angular.forEach(ctrl.uis, function(d) {
          console.log(d.date);
          dates.push(d.date);
        });
        // call back parent
        ctrl.onUpdate({dates: dates});
      }
    },
    bindings: {
      uis: '<',
      onUpdate: '&'
    },
});
