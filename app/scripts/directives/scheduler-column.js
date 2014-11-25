'use strict';

/**
 * @ngdoc directive
 * @name angularSchedulerSpikeApp.directive:schedulerColumn
 * @description
 * # schedulerColumn
 */


angular.module('angularSchedulerSpikeApp')
  .factory('momentjsService', ['$window', function($window) {  	
  	return $window.moment;
  }])
  .directive('schedulerColumn', ['momentjsService', function(momentjsService) {
    return {
      templateUrl: 'templates/scheduler-column.tmpl.html',
      restrict: 'E',      
      scope: {
      	availability: "=",
      	format: "@"
      },      
      link: function(scope, element, attrs) {        
      	// click handler for selecting a time.
        scope._clickHandler = function(param) {
        	console.log("click handler with param:", param);
        	scope.$emit("selected-time", param);
        };

        // format time.
        scope._formatTime = function(param) {        	
          scope.format = scope.format || "h:mm A"; //default format if not specified.

        	return momentjsService(param).format(scope.format);
        };
      }

          
    };
  }]);

 
