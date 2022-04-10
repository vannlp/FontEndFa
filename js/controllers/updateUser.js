function updateUser(app){
    app.controller("updateUserController", function($scope, $http) {
        let user = JSON.parse(sessionStorage['login']);

        $scope.myWelcome = user;

        let id = user.id;

        // post du lieu moi
        $scope.update = function() {
            let user = {
                "username": $scope.myWelcome.username,
                "email": $scope.myWelcome.email,
                "name": $scope.myWelcome.name
            };

            $http({
                method : "PATCH",
                url : `http://localhost:3000/users/${id}`,
                data: user
            }).then(res=>{
                let data = res.data;
                sessionStorage['login'] = JSON.stringify({
                    "username": $scope.myWelcome.username,
                    "email": $scope.myWelcome.email,
                    "name": $scope.myWelcome.name,
                    "id": data.id,
                    "role": data.role
                });
            })
        }
    });
}

export {updateUser};