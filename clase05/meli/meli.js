/**
 * Created by aleduarte06 on 22/08/15.
 */
angular.module('meliApp',['ui.router'])


angular.module('meliApp')
    .config(function($stateProvider,$urlRouterProvider){

        $stateProvider.state('buscador', {
            url: "/",
            templateUrl: "template/buscador.html",
            controller:'BuscadorCtrl'
        });

        $stateProvider.state('resultado', {
            url: "/resultado?query&filter",
            templateUrl: "template/resultado.html",
            controller:'ResultadoCtrl'
        });

        $stateProvider.state('todo', {
            url: "/todo",
            views:{
                vistaUno:{
                    templateUrl: "template/buscador.html",
                    controller:'BuscadorCtrl'
                },
                vistaDos:{
                    url: "/resultado",
                    templateUrl: "templates/resultado.html"
                }
            }
        });

        $urlRouterProvider.otherwise('/');
    });
