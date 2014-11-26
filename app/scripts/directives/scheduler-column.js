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
      	dateformat: "@dateformat",
        timeformat: "@timeformat",
        dayofweek: "@dayofweek"
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
          scope.dayofweek = attrs.dayofweek || "dddd"; //default format if not specified.
          return momentjsService(scope.date).format(scope.dayofweek);
        }

        // format date
        scope._formatDate = function() {
          scope.dateformat = attrs.dateformat || "M/D/YYYY"; //default format if not specified.
          return momentjsService(scope.nextAvailable).format(scope.dateformat);
        }

        scope._isNextAvailable = function() {
          return (scope.next && true);
        }

        scope._formatNextAvailable = function() {         
          return momentjsService(scope.next).format("ddd M/D");
        }

        // format time.
        scope._formatTime = function(param) {        	
          scope.timeformat = attrs.timeformat || "h:mm A"; //default format if not specified.
        	return momentjsService(param).format(scope.timeformat);
        };

      }

          
    };
  }]);

 
