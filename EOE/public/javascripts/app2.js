var app2 = window.angular.module('app2', [])

var request = require("request");
var jsonQuery = require('json-query')

app.factory('speciesFetcher', speciesFetcher)
app.controller('mainCtrl', mainCtrl)

function speciesFetcher($http) {
    var API_ROOT = 'species'
    return {
      get: function () {
        return $http
          .get(API_ROOT)
          .then(function (resp) {
            console.log(resp.data);
            return resp.data
          })
      }
    }
    /**
     * 
     *  request.get($http + , function (err, res, body) {
        if (!err) {
            var resultsObj = JSON.parse(body);
            console.log(resultsObj.MRData);
        }
    });
     */
  
  }

function pokemonFetcher ($http) {

  var API_ROOT = 'pokemon'
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

function speciesFetcher ($scope, speciesFetcher) {

  $scope.species = '';
  pokemonFetcher.get()
    .then(function (data) {
        var result = jsonQuery('[speciesName' + speciesName + ']', {
            data: data
          }) //=> {value: 'Matt', parents: [...], key: 0} ... etc 
          console.log("result is " + result);
      $scope.species = result;
    })




    function querySpecies(speciesName) {
        var data = speciesFetcher;
    
        var result = jsonQuery('[speciesName' + speciesName + ']', {
          data: data
        }) //=> {value: 'Matt', parents: [...], key: 0} ... etc 
        console.log("result is " + result);
        return result;
    
      }
}
