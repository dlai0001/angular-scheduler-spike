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
        date: "=", // date to display in header
      	availability: "=", //list of available times as date objects        
      	formatDate: "@",
        formatTime: "@"
      },      
      link: function(scope, element, attrs) {        
      	// click handler for selecting a time.
        scope._clickHandler = function(param) {
        	console.log("click handler with param:", param);
        	scope.$emit("selected-time", param);
        };

        // format date
        scope._formatDate = function() {
          scope.formatDate = scope.formatDate || "M/D "; //default format if not specified.
          return momentjsService(scope.date).format(scope.formatDate);
        }

        // format time.
        scope._formatTime = function(param) {        	
          scope.formatTime = scope.formatTime || "h:mm A"; //default format if not specified.
        	return momentjsService(param).format(scope.formatTime);
        };
      }

          
    };
  }]);

 
