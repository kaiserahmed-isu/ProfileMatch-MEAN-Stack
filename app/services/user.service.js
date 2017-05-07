angular
    .module("myApp")
    .factory("userService", function(globalConfig, $http) {
        var url = "";
        return {
            getUsers: function() {
                url = globalConfig.apiAddress + "/user";
                return $http.get(url);
            },
            getUser: function(id) {
                url = globalConfig.apiAddress + "/user/" + id;
                return $http.get(url);
            },
            addUser: function(user) {
                url = globalConfig.apiAddress + "/user";
                return $http.post(url, user);
            },
            modifyUser: function(user) {
                url = globalConfig.apiAddress + "/user/" + user._id;
                return $http.put(url, user);
            },
            deleteUser: function(id) {
                url = globalConfig.apiAddress + "/user/" + id;
                return $http.delete(url);
            },
        };
    });