(function(){
  'use strict';

  var app = angular.module('myApp', []);

  app.controller('MainController', MainController); 

  function MainController($scope, noCaptchaSiteKey) {
    $scope.noCaptchaSiteKey = noCaptchaSiteKey;
  }

})();
