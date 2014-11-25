'use strict';

/**
 * @ngdoc directive
 * @name angularSchedulerSpikeApp.directive:schedulerGroup
 * @description
 * # schedulerGroup
 */
angular.module('angularSchedulerSpikeApp')
  .directive('schedulerGroup', ['$compile', function ($compile) {
    return {
      templateUrl: 'templates/scheduler-group.tmpl.html',
      restrict: 'E',
      scope: {
      	data: "=",	//data array of available {date, availableTimes[]} pairs
      	range: "=?",	//Amount of 
      	offset: "=?"	//index (by item position in data array), to paginate over by.
      },
      link: function postLink($scope, $element, $attrs) {
        $scope.$watch('data', function(newValue, oldValue) {
          var range = $scope.range || 7;
          var offset = $scope.offset || 0;
          $scope._visibleSet = $scope.data.splice(offset, range);          
        }); //end watcher
      },
      controller: function($scope) {
        
        
    
      } //end controller
      
    }; //end return obj

  }]); //end directive
