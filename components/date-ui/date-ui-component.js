angular.module('myApp').
  component('dateUi', {
    templateUrl: 'components/date-ui/date-ui.html',
    controller: function DateRangeController() {
      var ctrl = this;
      ctrl.dateClass = 'col-md-6';
      ctrl.format = 'dd/MM/yyyy';
      ctrl.date = new Date();
      ctrl.options = { maxDate: new Date(), minDate: new Date('2016-01-01') };
      ctrl.opened = false;
      ctrl.openRangeStart = function () {
        ctrl.opened = true;
      }
    },
    bindings: {
      ui: '<'
    },
});
