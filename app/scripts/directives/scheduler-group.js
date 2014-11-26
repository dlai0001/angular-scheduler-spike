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
      	offset: "=?",	//index (by item position in data array), to paginate over by.
        direction: "=?" //direction the element enters from (left -> exit right, enter left)
      },
      link: function postLink($scope, $element, $attrs) {

        //handle changes in data
        $scope.$watch('data', function(newValue, oldValue) {
          var range = $scope.range || 7;
          var offset = $scope.offset || 0;

          if($scope.direction){
            //time the dataswap during the mid point of the slide transition.
            setTimeout(function() {
              $scope.$apply(function() {
                $scope._visibleSet = $scope.data.splice(offset, range);
              });
            }, 500);
          } else {
            $scope._visibleSet = $scope.data.splice(offset, range);
          }          

          var schedulerGroup = $element.find("div.scheduler-group");          
          if($scope.direction === "left") {
            schedulerGroup.addClass("exitRightEnterLeft");
          } else if($scope.direction === "right") {
            schedulerGroup.addClass("exitLeftEnterRight");
          }          
          
          setTimeout(function(){            
            $element.find("div.scheduler-group").removeClass("exitRightEnterLeft").removeClass("exitLeftEnterRight");            
          }.bind(this), 1000);

        }); //end watcher
      },
      controller: function($scope) {
      } //end controller
      
    }; //end return obj

  }]); //end directive
