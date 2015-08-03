
angular
    .module('calcApp', [])
    .controller('calculadoraController', function($scope){


    });

angular.module('calcApp')
    .directive('calc', function(){
        return {
            restrict: 'AE',
            templateUrl: './calculadora-partial.html',
            link: function postLink($scope, element, attrs){
                var num = '';
        
                $scope.tecla = function(t){
                    
                    switch(t){
                        case '=':
                            num = eval(num);
                            break;
                        case 'C': 
                            num = '';
                            break;
                        default:
                            num+=t;
                    }
                    
                    $scope.resultado = num;
                }
                
            }
        };
    });





