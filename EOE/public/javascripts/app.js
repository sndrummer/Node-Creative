var app = window.angular.module('app', [])
var mySpec = "";
//var allSpecies = [];
//////  //////////////
var allSpecies = [];


function addObj(obj) {
  allSpecies[allSpecies.length] = obj;
}




app.factory('speciesFetcher', speciesFetcher)
app.controller('mainCtrl', mainCtrl)

function speciesFetcher($http) {

  var API_ROOT = 'species'
  var selection = mySpec;
  console.log("Current Selection: " + selection);
  if (selection !== "") {
    API_ROOT += selection;
  }
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl($scope, speciesFetcher, $http) {

  $scope.species = []


  speciesFetcher.get()
    .then(function (data) {
      $scope.species = data;
      //console.log($scope.species[2].speciesName);

      var arr = Object.values($scope.species);
      //console.log("arr SpeciesName" + arr[2].speciesName);
      //var arr= JSON.parse(data);
      i = 0;
      for (var spec in arr) {
        //var obj = JSON.parse(spec);
        addObj(spec);
        allSpecies[i] = arr[i];
        //console.log("ARR: " + arr[i].speciesName);
        //console.log("ALL_SPECIES: " + allSpecies[i].speciesName);
        i++;
      }
      //this.allSpecies = $scope.species;
      // console.log("Scope.species is " + allSpecies);
      //return $scope.species;
    });

}



/**
 * 
 * @param {*}  
 * 
function speciesFetcher2($http) {

  name = $scope.species_selection;
  var API_ROOT = 'species-' + name
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}


function mainCtrl2($scope, speciesFetcher, $http) {
  
    $scope.speciesSHOW = "";
    speciesFetcher2.get()
      .then(function (data) {
        $scope.speciesSHOW = data;
      });
  
  }


 */


/*
  $scope.addPoki = function () {
  var formData = {
    name: $scope.Name,
    avatarUrl: $scope.Url
  };
  console.log(formData);
  var pokiURL = 'species';
  $http({
    url: pokiURL,
    method: "POST",
    data: formData
  }).success(function (data, status, headers, config) {
    console.log("Post worked");
  }).error(function (data, status, headers, config) {
    console.log("Post failed");
  });
}
  */


//////////////////////////////////

app.controller('formCtrl', function ($scope) {
  $scope.characterName = "";
  //XP

});

app.controller('xpController', ['$scope', function ($scope) {

  $scope.StartXP = 1;
  $scope.EarnedXP = 2;
  $scope.TotalXP = 3;
  $scope.UsedXP = 4;
  $scope.UnusedXP = 5;
}])
app.directive('xpDirective', function () {


  return {
    restrict: 'E',
    scope: {
      model: '='
    },
    template: '<select class="form-control" id="species" ng-model="model" ng-options="option.name as option.value group by option.type for option in options"></select>',
    controller: function ($scope) {

    }
  };


});


app.controller('appController', ['$scope', function ($scope) {}])
app.directive('speciesList', function () {
  //var mySpec = $scope.species;
  //console.log(mySpec);
  return {
    restrict: 'E',
    scope: {
      model: '='
    },
    template: '<select class="form-control" id="species" ng-change="changeRace()" ng-model="species_selection" ng-options="option.name as option.value group by option.type for option in options"></select>',
    controller: function ($scope) {
      $scope.options = [{
          name: '',
          value: '',
          type: ""
        },
        {
          name: 'Aqualish',
          value: 'Aqualish',
          type: ""
        },
        {
          name: 'Bothan',
          value: 'Bothan',
          type: ""
        },
        {
          name: 'Chevin',
          value: 'Chevin',
          type: ""
        },
        {
          name: 'Chiss',
          value: 'Chiss',
          type: ""
        },
        {
          name: 'Clawdite',
          value: 'Clawdite',
          type: ""
        },
        {
          name: 'Devaronian',
          value: 'Devaronian',
          type: ""
        },
        {
          name: 'Drall',
          value: 'Drall',
          type: ""
        },
        {
          name: 'Droid',
          value: 'Droid',
          type: ""
        },
        {
          name: 'Duros',
          value: 'Duros',
          type: ""
        },
        {
          name: 'Gand',
          value: 'Gand',
          type: ""
        },
        {
          name: 'Human',
          value: 'Human',
          type: "Human"
        },
        {
          name: 'Corellian',
          value: 'Corellian',
          type: "Human"
        },
        {
          name: 'Kalleran',
          value: 'Kalleran',
          type: ""
        },
        {
          name: 'Klatooinian',
          value: 'Klatooinian',
          type: ""
        },
        {
          name: 'Rodian',
          value: 'Rodian',
          type: ""
        },
        {
          name: 'Selonian',
          value: 'Selonian',
          type: ""
        },
        {
          name: 'Toydarian',
          value: 'Toydarian',
          type: ""
        },
        {
          name: 'Trandoshan',
          value: 'Trandoshan',
          type: ""
        },
        {
          name: 'Twi\'lek',
          value: 'Twi\'lek',
          type: ""
        },
        {
          name: 'Weequay',
          value: 'Weequay',
          type: ""
        },
        {
          name: 'Wookiee',
          value: 'Wookiee',
          type: ""
        }
      ];

      $scope.changeRace = function () {
        console.log("Function called");
        mySpec = $scope.species_selection;
        console.log(mySpec);

        updateValues($scope, allSpecies);

        //console.log(formData);
        // function updateValues(mySpec){
        //  if (mySpec) {
        //   makeQuery(mySpec);
        // }
        // }

      };

      function updateValues($scope, allSpecies) {
        //console.log("Species selection: " + $scope.species_selection);
       // console.log("Scope.species " + allSpecies);
        //console.log("ALL_SPECIES AGAIN!!!: " + allSpecies[2].speciesName);
        //var allSpecies = mainCtrl($scope, speciesFetcher, $http);

        for (var i = 0; i < allSpecies.length; i++) {
          if (allSpecies[i].speciesName == $scope.species_selection) {
            console.log("We HAVE A WINNER!!!: " + allSpecies[i].speciesName);
          }
        }
      }
    }
  };
});