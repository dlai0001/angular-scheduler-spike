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
      	availability: "=availability", //list of available times as date objects
        next: "=next",
      	formatDate: "@formatDate",
        formatTime: "@formatTime",
        formatDayOfWeek: "@formatDayOfWeek"
      },      
      link: function(scope, element, attrs) {        
      	// click handler for selecting a time.
        scope._clickHandler = function(param) {        	
        	scope.$emit("selected-time", param);
        };        

        scope._nextAvailableClickHandler = function() {
          scope.$emit("selected-next-available", scope.next);
        }.bind(this);

        scope._formatDayOfWeek = function() {
          scope.formatDayOfWeek = attrs.formatDayOfWeek || "dddd"; //default format if not specified.
          return momentjsService(scope.date).format(scope.formatDayOfWeek);
        }

        // format date
        scope._formatDate = function() {
          scope.formatDate = attrs.formatDate || "M/D/YYYY"; //default format if not specified.
          return momentjsService(scope.nextAvailable).format(scope.formatDate);
        }

        scope._isNextAvailable = function() {
          return (scope.next && true);
        }

        scope._formatNextAvailable = function() {          
          return momentjsService(scope.next).format("dddd M/D");
        }

        // format time.
        scope._formatTime = function(param) {        	
          scope.formatTime = attrs.formatTime || "h:mm A"; //default format if not specified.
        	return momentjsService(param).format(scope.formatTime);
        };

      }

          
    };
  }]);

 
