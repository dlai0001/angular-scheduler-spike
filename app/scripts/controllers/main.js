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
    
    var time1 = {
    	id:1,
    	time: new Date(2014, 11, 30, 13, 0, 0, 0)
    };
    var time2 = {
    	id:2,
    	time: new Date(2014, 11, 30, 14, 0, 0, 0)
    };
    var time3 = {
    	id:2,
    	time: new Date(2014, 11, 30, 15, 0, 0, 0)
    };


    $scope.testData = {
    	date : new Date(2014, 11, 30),
    	availableTimes : [
    		time1,
    		time2,
    		time3    		
    	]
    };


    $scope.testData2 = [
    	{
    		date: new Date(2014, 11, 30),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 1),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 2),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 3),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 4),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 5),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 6),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 7),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 8),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 9),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 10),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 11),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 12),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},
    	{
    		date: new Date(2014, 12, 13),
			availableTimes : [
			    time1,
			    time2,
			    time3    		
			]
    	},

    ]



    $scope.$on("selected-time", function(event, data) {
    	alert('selected id:' + data.id + ', selected time : ' + data.time);
    });

  });
