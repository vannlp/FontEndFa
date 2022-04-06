function quizDetail(app){
    app.controller("quizDetailController",function($scope, $http, $routeParams){
        let id = $routeParams.quizId;
        $http.get("http://localhost:3000/quizs/"+id).then((res)=>{
            let data = res.data;

            $scope.quiz = data;
        })
    })
}
export {quizDetail};