app.controller('MainController', function($scope) {

    $scope.newUsers = {};
    $scope.clickedUser = {};

    $scope.users = [
        { username: "Kostya", fullname: "Kostya Gromov", email: "gromovkostya92@gmail.com" },
        { username: "Alex", fullname: "Alex Alexov", email: "alexalexov92@gmail.com" }
    ];

    $scope.saveUser = function() {
        $scope.users.push($scope.newUsers);
        $scope.newUsers = {};
    };

    $scope.selectUser = function(user) {
        $scope.clickedUser = user;
    };

    $scope.deleteUser = function() {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
    };

});