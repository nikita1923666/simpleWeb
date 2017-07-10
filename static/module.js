var searchApp = angular.module('searchApp', []);

//https://docs.angularjs.org/tutorial/step_02
searchApp.controller('searchPageController', function ($scope, $http) {
    $scope.search = search;
    $scope.data = {
        name: '',
        flag: ''
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
        $http.get('/solve.api?a=' + $scope.a + '&b=' + $scope.b + '&c=' + $scope.c)
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
//
// var record =
//     {
//         "name": "Эльвира",
//         "surname": "Воробьёвa",
//         "gender": "female",
//         "region": "Russia",
//         "age": 26,
//         "title": "ms",
//         "phone": "(379) 120 1612",
//         "birthday": {"dmy": "01\/05\/1991", "mdy": "05\/01\/1991", "raw": 673120819},
//         "email": "Эльвира_91@example.com",
//         "password": "Воробьёвa91{}",
//         "credit_card": {"expiration": "6\/25", "number": "9217-8812-2136-8038", "pin": 7090, "security": 722},
//         "photo": "https:\/\/uinames.com\/api\/photos\/female\/7.jpg"
//     }

searchApp.controller('dataBaseController', function ($scope, $http, $window, $timeout) {
    $scope.save = save;
    $scope.data = {
        "name": "Эльвира",
        "surname": "Воробьёвa",
        "gender": "female",
        "region": "Russia",
        "age": 26,
        "title": "ms",
        "phone": "(379) 120 1612",
        "email": "nikita1923666@gmail.com",
        "password": "Воробьёвa91{}",
    };

    $scope.emailPattern = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
    function save() {
        var reqData = $scope.data;
        $scope.saving=true;
        $http.post('/data/person', reqData)
            .then(function () {
                myAlert("Saved!");
            })
            .catch(function (err) {
                console.log(err.data);
                $scope.errM=err.data;
                myAlert("Error message: " + err.data);
            })
            .finally(function () {
                $timeout(function () {
                    $scope.saving=false;
                },3000)
            })
    }

    function myAlert(message) {
        $timeout(function () {
            $window.alert(message);
        },0);
    }
});