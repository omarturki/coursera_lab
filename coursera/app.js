(function () {
  'use strict';
  
  angular.module('DIApp', [])
  .controller('DIController', DIController);
  
  DIController.$inject = ['$scope', '$filter'];
  function DIController($scope, $filter) {
   $scope.calc = function () {
      var str = $filter('calc');
      str.split(",");
      if(str.length>4 && str.length<0){
        $scope.name = alert("Enjoy!");
      }
      else{
        if(str.length==0){
          $scope.name = alert("Too much!");

        }
      }

    };
  }
  
  })();