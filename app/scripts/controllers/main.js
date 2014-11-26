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
    
    $scope.testData = null;
    var updateTimeData = function() {
        console.log("updating data");
        var dayValue = eval("[" + jQuery("#dayData").val() + "]")[0];
        $scope.testDataNext = eval("[" + jQuery("#nextDateInput").val() + "]")[0];
        $scope.testData = dayValue;
    };
    updateTimeData();

    $scope.testDataNext = new Date(2014, 11, 26, 12, 30, 0, 0);

    $scope._updateTimeData = function() {
        updateTimeData.bind(this)();
    }

    $scope.testData2 = [];
    var updateData = function() {
        console.log("updating data");
        var value = eval(jQuery("#weekData").val());        
        $scope.testData2 = value;
    }
    updateData();
    $scope._updateData = function() {
        updateData.bind(this)();
    };



    $scope.$on("selected-time", function(event, data) {
        var alertMsg = $("<div class=\"alert alert-info\">")
            .text('selected-time : ' + data)
            .css("position", "fixed")
            .css("top", "50%")
            .css("z-index", 9999)            
        $("body").append(alertMsg);
        alertMsg.fadeOut(2000, function() {
            alertMsg.remove();
        });
    });

    $scope.$on("selected-next-available", function(event, data) {
        var alertMsg = $("<div class=\"alert alert-warning\">")
            .text('selected-next-available : ' + data)
            .css("position", "fixed")
            .css("top", "50%")
            .css("z-index", 9999)            
        $("body").append(alertMsg);
        alertMsg.fadeOut(2000, function() {
            alertMsg.remove();
        });
    });


  });
