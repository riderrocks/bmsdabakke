'use strict';

angular.module('myApp.addPost')

.controller('encdecCtrl', ['$scope','$firebase',function($scope, $firebase) {
	
	var bms = {};
	
	$scope.encrypt = function() {
	var firebaseObj = new Firebase("https://radiant-torch-5333.firebaseio.com/Articles");
    var fb = $firebase(firebaseObj);

    fb.$push({
            name: $scope.name,
            email: $scope.email,
            msg: $scope.msg,
        }).then(function(ref) {
            console.log(ref);
       		alert('Data inserted successfully');
        }, function(error) {
            console.log("Error:", error);
            alert(error);
        });

}
}])