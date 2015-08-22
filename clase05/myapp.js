/**
 * Created by aleduarte06 on 22/08/15.
 */
var mod = angular.module('myApp',[]);
mod.controller('BuscadorCtrl', function($scope){
    console.log($scope);
    $scope.test = 'Hola Como va?';
    $scope.clickBoton = function(){
        console.log('holaaaaaaaa'+ $scope.nombre);
    }

    $scope.$watch('nombre',function(newValue,oldValue){
        console.log('valor nuevo', newValue);
        console.log('valor viejo', oldValue);

    })
});

mod.controller('LoginCtrl',function($scope){
   $scope.validar = function(){
       console.log($scope.email);
       console.log($scope.password);
       if(!$scope.email){
           $scope.error = 'necesito el email';
       }else if($scope.email.length <= 3){
           $scope.error = 'el email es muy corto';
       }else {
           $scope.error = '';
       }

   }
});
