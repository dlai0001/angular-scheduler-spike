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
      	data: "=", //data array of available {date, availableTimes[]} pairs
        range: "@range",  //Amount of 
        offset: "@offset", //index (by item position in data array), to paginate over by.
        direction: "@direction" //direction the element enters from (left -> exit right, enter left)
      },
      controller: function($scope) {        

        function updateVisibleSet() {
          /// Setup default properties /////
          var range = parseInt($scope.range) || 7;
          var offset = parseInt($scope.offset) || 0;
          $scope._visibleSet = $scope.data.splice(offset, range);
        }

        //handle changes in data
        $scope.$watch('data', function(newValue, oldValue) {
          
          if($scope._direction){
            //time the dataswap during the mid point of the slide transition.
            setTimeout(function() {              
              $scope.$apply(function() {
                updateVisibleSet();
              });
            }, 500);
          } else {
            // other wise set immediately
            updateVisibleSet();
          }                    

          $scope.$emit("scheduler-group:updatingData");
        }); //end watcher

      }, //end controller

      link: function postLink(scope, element, attrs) {

        var _schedulerGroup = element.find("div.scheduler-group");

        /////// Rig up listners on the element to detect animation end //////
        function handleAnimationEnd(){
          console.log("animation complete");
          scope.$emit("scheduler-group:animationComplete");
        }

        _schedulerGroup[0].addEventListener("animationend", handleAnimationEnd, false);
        _schedulerGroup[0].addEventListener("webkitAnimationEnd", handleAnimationEnd, false);
        _schedulerGroup[0].addEventListener("MSAnimationEnd", handleAnimationEnd, false);
        _schedulerGroup[0].addEventListener("oanimationend", handleAnimationEnd, false);

        /////// Animation Code /////////

        function animateSlideInSlideOut() {
          if(scope.direction === "left") {
            _schedulerGroup.addClass("exitRightEnterLeft");              
          } else if(scope.direction === "right") {
            _schedulerGroup.addClass("exitLeftEnterRight");
          }
        }
        scope.$on("scheduler-group:updatingData", function() {            
          animateSlideInSlideOut();
        });
        scope.$on("scheduler-group:animationComplete", function() {            
          _schedulerGroup.removeClass("exitLeftEnterRight");
          _schedulerGroup.removeClass("exitRightEnterLeft");
        });

      }

      
    }; //end return obj

  }]); //end directive
