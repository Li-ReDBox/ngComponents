angular.module('mereUI').component('casDropdowns', {
  templateUrl: 'components/casDropdns/casdropdowns.html',
  bindings: {
    levelData: '<',
    reporter: '&',
    setSpy: '&'
  },
  controller: function CompController () {
    function getSelected() {
      var lvl = 0, ids = [];
      while (ctrl.selected[lvl]) {
        ids.push(ctrl.selected[lvl++]['name']);
      }
      // console.log(ids);
      return ids;
    }

    var ctrl = this;
    ctrl.levels = [];
    ctrl.selected = [];
    // set up levels other than the top one
    for (var i = 1; i < ctrl.levelData.length; i++) {
      ctrl.levels.push(i);
    }
    ctrl.setSpy({spy: getSelected});

    ctrl.canShow = function(lvl) {
      var parentLevel = parseInt(lvl) - 1;
      if (angular.isDefined(ctrl.selected[parentLevel]) && ctrl.selected[parentLevel] !== null) {
        return ctrl.selected[parentLevel]['id'] in ctrl.levelData[lvl];
      } else {
        return false;
      }
    };

    ctrl.go = function() {
      ctrl.reporter({selected: getSelected()});
    };
  }
});
