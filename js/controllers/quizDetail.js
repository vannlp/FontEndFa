function quizDetail(app){
    app.controller("quizDetailController",function($scope, $http, $routeParams){
        console.log($routeParams.quizId);
    })
}
export {quizDetail};