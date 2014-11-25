'use strict';

/**
 * @ngdoc directive
 * @name angularSchedulerSpikeApp.directive:schedulerGroup
 * @description
 * # schedulerGroup
 */
angular.module('angularSchedulerSpikeApp')
  .directive('schedulerGroup', function () {
    return {
      templateUrl: 'templates/scheduler-group.tmpl.html',
      restrict: 'E',
      scope: {
      	data: "=",	//data array of available {date, availableTimes[]} pairs
      	range: "=?",	//Amount of 
      	offset: "=?"	//index (by item position in data array), to paginate over by.
      },
      controller: function($scope) {
        // element.text('this is the schedulerGroup directive');

        // We use 2 filtered sets to make the animation smooth when sliding in and out for pagination.
        $scope.$watch('data', function(newValue, oldValue) {
          var range = $scope.range || 7;
          var offset = $scope.offset || 0;
          $scope._visibleSet = $scope.data.splice(offset, range);
        });
        
      }
      
    };
  });
