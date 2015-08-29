 /**
 * Created by aleduarte06 on 22/08/15.
 */
var mod = angular.module('myapp',['ui.router']);
mod.config(function($stateProvider, $urlRouterProvider){

 $stateProvider
     .state('seccion1',{
         url: '/seccion1',
         templateUrl: 'template/template1.html',
         controller: 'primerCtrl'
     })

     .state('seccion2',{
         url: '/seccion2',
         templateUrl: 'template/template2.html',
         controller: 'segundoCtrl'
     })
    $urlRouterProvider.otherwise('/seccion1');

});

mod.controller('primerCtrl', function($scope,$state){
    console.log('Primer Controlador');

    $scope.enviarForm = function(){

        $scope.datos = [{
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            sexo:$scope.sexo,
            email:$scope.email,
            tuFrase:$scope.tuFrase
        }];
        console.log($scope.datos);
    };
    $scope.goSeccion2 = function(){
        $state.go('seccion2',{
        });
    }
});

 mod.controller('segundoCtrl', function($scope){
     console.log('Segungo controlador');
     $scope.items = [{
         id:'1',
         nombre:'Ale',
         apellido:'Duarte',
         email:'aleduarte06@gmail.com'
     },{
         id:'2',
         nombre:'Kike',
         apellido:'Duarte',
         email:'kikeduarte@gmail.com'
     },{
         id:'3',
         nombre:'Diego',
         apellido:'Arias',
         email:'AriasDiego@gmail.com'
     }]


 });

