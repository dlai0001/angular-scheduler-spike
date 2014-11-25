'use strict';

/**
 * @ngdoc function
 * @name angularSchedulerSpikeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSchedulerSpikeApp
 */
angular.module('angularSchedulerSpikeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    var time1 = new Date(2014, 11, 30, 13, 0, 0, 0);
    var time2 = new Date(2014, 11, 30, 14, 0, 0, 0);
    var time3 = new Date(2014, 11, 30, 15, 0, 0, 0);


    $scope.testData = {
    	date : new Date(2014, 11, 30),
    	availableTimes : [
    		time1,
    		time2,
    		time3
    	]
    };


    $scope.testData2 = [];



    $scope.$on("selected-time", function(event, data) {
    	alert('selected time : ' + data);
    });

    var updateData = function() {
        console.log("updating data");
        var value = eval(jQuery("#weekData").val());        
        $scope.testData2 = value;
    }
    updateData();
    $scope._updateData = function() {
        updateData.bind(this)();
    };

  });
