describe('component: greetUser', function() {
  var $componentController;

  beforeEach(module('myApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should expose a `inuser` object', function() {
    // Here we are passing actual bindings to the component
    var bindings = {inuser: 'Wolverine'};
    var ctrl = $componentController('greetUser', null, bindings);

    expect(ctrl.inuser).toBeDefined();
    expect(ctrl.inuser).toBe('Wolverine');
  });

  it('should call the `onUpdate` binding with value string', function() {
    var onUpdateSpy = jasmine.createSpy('onUpdate');
    var bindings = {bridge: onUpdateSpy};
    var ctrl = $componentController('greetUser', null, bindings);

    ctrl.doSomething();
    expect(onUpdateSpy).toHaveBeenCalledWith({
      data: 'string'
    });
  });

});
