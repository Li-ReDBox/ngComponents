angular.module('myApp').
  component('datePickerUib', {
    templateUrl: 'components/datePickerUib/date-picker-uib.html',
    controller: function DateRangeController() {
      var defaults = {
        'class': 'col-md-6',
        'format': 'dd/MM/yyyy'
      };

      var ctrl = this;
      angular.forEach(defaults, function(value, key) {
        if (!ctrl.picker.hasOwnProperty(key)) {
          ctrl.picker[key] = value;
        }
      });

      ctrl.options = { maxDate: new Date() };
      if (ctrl.picker.hasOwnProperty('minDate')) {
        ctrl.picker[key] = value;
        ctrl.options['minDate'] = ctrl.picker['minDate'];
      }

      ctrl.opened = false;
      ctrl.show = function () {
        ctrl.opened = true;
      };
    },
    bindings: {
      picker: '<'
    },
});
