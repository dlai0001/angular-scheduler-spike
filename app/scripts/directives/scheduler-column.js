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
      	availability: "="
      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the schedulerColumn directive');

        scope._clickHandler = function(param) {
        	console.log("click handler with param:", param);
        	scope.$emit("selected-time", param);
        };

        scope._formatTime = function(param) {
        	//return moment(param).format("H:mm A");
        	return momentjsService(param).format("h:mm A");
        };
      }

          
    };
  }]);

 
