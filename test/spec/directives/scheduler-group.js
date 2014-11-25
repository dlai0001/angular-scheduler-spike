'use strict';

describe('Directive: schedulerGroup', function () {

  // load the directive's module
  beforeEach(module('angularSchedulerSpikeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scheduler-group></scheduler-group>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the schedulerGroup directive');
  }));
});
