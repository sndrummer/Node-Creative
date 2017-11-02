
    var app = angular.module('app',[]);
    
    app.controller('formCtrl', function($scope) {
        $scope.characterName = "";
    });
   
    app.controller('appController', ['$scope', function($scope) {
          $scope.species = {};
          $scope.species.selection = '';
      }])
      app.directive('theRatings', function() {
        
        return {
          restrict: 'E',
          scope: { model: '=' },
          template: '<select class="form-control" id="species" ng-model="model" ng-options="option.name as option.value group by option.type for option in options"></select>',
          controller: function($scope) {
            $scope.options = [
                { name: 'Aqualish', value: 'Aqualish' , type:""}, 
                { name: 'Bothan', value: 'Bothan' , type:""}, 
                { name: 'Chevin', value: 'Chevin' , type:""}, 
                { name: 'Chiss', value: 'Chiss' , type:""}, 
                { name: 'Clawdite', value: 'Clawdite' , type:""}, 
                { name: 'Devaronian', value: 'Devaronian' , type:""}, 
                { name: 'Drall', value: 'Drall' , type:""}, 
                { name: 'Droid', value: 'Droid' , type:""}, 
                { name: 'Duros', value: 'Duros' , type:""}, 
                { name: 'Gand', value: 'Gand' , type:""}, 
                { name: 'Human', value: 'Human' , type:"Human"}, 
                { name: 'Corellian', value: 'Corellian' , type:"Human"}, 
                { name: 'Kalleran', value: 'Kalleran' , type:""}, 
                { name: 'Klatooinian', value: 'Klatooinian' , type:""}, 
                { name: 'Rodian', value: 'Rodian' , type:""}, 
                { name: 'Selonian', value: 'Selonian' , type:""}, 
                { name: 'Toydarian', value: 'Toydarian' , type:""}, 
                { name: 'Trandoshan', value: 'Trandoshan' , type:""}, 
                { name: 'Twi\'lek', value: 'Twi\'lek', type:""}, 
                { name: 'Weequay', value: 'Weequay' , type:""}, 
                { name: 'Wookiee', value: 'Wookiee', type:"" }
            ];
          }    
        };
      });