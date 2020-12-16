
(function () {
    var app = angular.module('Tienda', []);
    app.controller('TiendaController', function ($scope, $http) {

        //Importar JSON
        $scope.importar = function () {

            $http.get('/Assets/JS/datos.json').success(function(datos){
                $scope.store = datos;
            });
            
        }
        $scope.importar($scope.store);
        
        //Función agregar
        $scope.agregar = function(){
        
            //Aumentando valor de carrito
           let parsefondos = JSON.parse($scope.store);
            return parsefondos;
        }
      


    });
 

})();

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});
