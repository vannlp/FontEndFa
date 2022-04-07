// import {getProduct} from "../api.js";

 function home(app){
    app.controller("homeController", function($scope, $http){
        // Gọi api
        $http.get("http://localhost:3000/quizs").then(function(res){
            let data = res.data;
            $scope.dataHome = data;
            console.log(data);
        });

        $http.get("http://localhost:3000/subjects").then(function(res){
            let data = res.data;
            $scope.dataSubjects = data;
        })
       
    })
}

export {home};