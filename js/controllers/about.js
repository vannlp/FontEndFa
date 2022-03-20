function about(app){
    app.controller("aboutController",function($scope, $http){
        $http.get("http://localhost:3000/about").then(data=>{
            $scope.aboutData = data.data;
        });
    })
}

export {about};