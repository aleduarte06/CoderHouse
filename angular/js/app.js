 /**
 * Created by aleduarte06 on 22/08/15.
 */
angular.module('myapp',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

     $stateProvider
         .state('main',{
             url: '/main',
             templateUrl: 'template/main.html'
         })

         .state('uno',{
             url: '/uno',
             templateUrl: 'template/template1.html'
         })

         .state('dos',{
            url: '/dos',
            templateUrl: 'template/template2.html'
         })

         .state('tres',{
            url: '/tres',
            templateUrl: 'template/template3.html'
         });

        $urlRouterProvider.otherwise('/main');

    });