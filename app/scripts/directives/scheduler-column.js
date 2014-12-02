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
        date: "=date", // date to display in header
      	availability: "=availability", //list of available times as date objects
        next: "=next"      	
      },      

      controller: function($scope) {
        /////// Apply formatters for date/time //////////////
        $scope._formatDayOfWeek = function() {          
          return momentjsService($scope.date).format($scope._dayofweek);
        }

        $scope._formatDate = function() {          
          return momentjsService($scope.nextAvailable).format($scope._dateformat);
        }

        $scope._formatTime = function(param) {                   
          return momentjsService(param).format($scope._timeformat);
        };

        /////////////// Handle Displaying the next available date if set /////////////////
        $scope._isNextAvailable = function() {
          return ($scope.next && true);
        }

        $scope._formatNextAvailable = function() {         
          return momentjsService($scope.next).format("ddd M/D");
        }


        ////// Click Handlers ///////
        $scope._clickHandler = function(param) {          
          $scope.$emit("selected-time", param);
        };

        $scope._nextAvailableClickHandler = function() {
          $scope.$emit("selected-next-available", $scope.next);
        }.bind(this);
      },

      link: function(scope, element, attrs) {      

        ///// Provide default formatting if not specified. /////
        scope._dayofweek = attrs.dayofweek || "dddd"; //default format if not specified.
        scope._dateformat = attrs.dateformat || "M/D/YYYY"; //default format if not specified.
        scope._timeformat = attrs.timeformat || "h:mm A"; //default format if not specified.
      }


          
    };
  }]);

 
