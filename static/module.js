var searchApp = angular.module('searchApp',[]);

//https://docs.angularjs.org/tutorial/step_02
searchApp.controller('searchPageController', function ($scope, $http) {
  $scope.search = search;
  $scope.data = {
     name: ''
  };
  
  function search() {
      var reqData = $scope.data;
      $http.post('/search.api', reqData)
          .then(function (res) {
              $scope.result = res.data.person;
          });
  }
});

searchApp.controller('solvePageController', function ($scope, $http) {
    $scope.solve = solve;
    $scope.clearRes = clearRes;
    $scope.type = 's';


    clearRes();

    function solve() {
        $http.get('/solve.api?a='+ $scope.a  + '&b='+ $scope.b + '&c='+ $scope.c)
            .then(function (res) {
                $scope.solved = true;
                $scope.x1 = res.data.x1;
                $scope.x2 = res.data.x1;
            })
            .catch(function (err) {
                $scope.error = err.data;
            });
    }

    function clearRes() {
        $scope.error = '';
        $scope.solved = false;
    }
});
