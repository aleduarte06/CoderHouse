/**
 * Created by aleduarte06 on 22/08/15.
 */
angular.module('meliApp',['ui.router']);
angular.module('meliApp').config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('buscador',{url: "/", templateUrl:"template/buscador.html", controller:'BuscadorCtrl'});
    $stateProvider.state('resultado',{url: "/resultado", templateUrl:"template/resultado.html"});
    $urlRouterProvider.otherwise('/');

});