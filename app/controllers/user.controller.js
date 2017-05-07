angular
    .module("myApp")
    .controller("userController", function($scope, $rootScope, $state, $stateParams, userService) {
        if ($state.current.name == "home") {
            $rootScope.Title = "User Listing";
            userService.getUsers().then(function(results) {
                $scope.users = results.data;
//                console.log($scope.users);
            });
        } else if ($state.current.name == "create") {
            $rootScope.Title = "Create User";
        } else if ($state.current.name == "edit") {
            $rootScope.Title = "Update User";
            var id = $stateParams.id;
            userService.getUser(id).then(function(results) {
                $scope.user = results.data;
            });
        }

        $scope.saveData = function(user) {
//            console.log(user);
            if ($scope.userForm.$valid) {
                if (user._id) {
                    console.log(user._id);
                    userService.modifyUser(user).then(function(results) {
//                         console.log(results);
                        if (results.data == "updated") {
                            $state.go("home");
                        }
                    });
                } else {
                    userService.addUser(user).then(function(results) {
//                         console.log(results);
                        if (results.data == "created") {
                            $state.go("home");
                        }
                    });
                }
            }
        };

        $scope.delete = function(id) {
            if (confirm('Are you sure to delete?')) {
                userService.deleteUser(id).then(function(results) {
                    if (results.data == "deleted") {
                        $state.go("home", {}, { reload: true });
                    }
                });
            }
        };
    });