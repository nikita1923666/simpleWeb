var searchApp = angular.module('searchApp',[]);

//https://docs.angularjs.org/tutorial/step_02
searchApp.controller('searchPageController', function ($scope, $http) {
  $scope.search = search;
  
  function search() {
      $http.get('/search.api?name=' + $scope.name)
          .then(function (res) {
              $scope.result = res.data.person;
          });
  }
});

searchApp.controller('solvePageController', function ($scope, $http) {
    $scope.solve = solve;

    function solve() {
        $http.get('/solve.api?a='+ $scope.a  + '&b='+ $scope.b + '&c='+ $scope.c)
            .then(function (res) {
                $scope.x1 = res.data.x1;
                $scope.x2 = res.data.x1;
            });
    }
});
