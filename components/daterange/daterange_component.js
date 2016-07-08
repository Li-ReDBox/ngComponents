angular.module('myApp').
  component('dateRange', {
    templateUrl: 'components/daterange/daterange.html',
    controller: function DateRangeController() {
      console.log(this.uis);
      this.buttonTilte = "Open up";
    },
    bindings: {
      uis: '<'
    },
});
