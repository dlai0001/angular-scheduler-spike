'use strict';

describe('Directive: schedulerColumn', function () {

  // load the directive's module
  beforeEach(module('angularSchedulerSpikeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scheduler-column></scheduler-column>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the schedulerColumn directive');
  }));
});
