// import {getProduct} from "../api.js";

function home(app){
    app.controller("homeController",function($scope, $http){
        $http.get("http://localhost:3000/about").then(data=>{
            $scope.homeData = data.data;
        });
    })
}

export {home};