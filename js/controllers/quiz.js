function quiz(app) {
    app.controller("quizController", function($scope, $http) {

        $http.get("http://localhost:3000/quizs?_page=1&_limit=6").then(function(res) {
            let data = res.data;
            $scope.dataQz = data;
            console.log(data);
        });

        $http.get("http://localhost:3000/subjects").then(function(res) {
            let data = res.data;
            $scope.dataSj = data;
            console.log(data);
        })

        $http.get("http://localhost:3000/quizs").then(function(res) {
            let data = res.data;
            $scope.dataQzTX = data.length / 6;
            console.log(data);
        });


        $scope.search = function(id) {
            if (id != null) {
                $http.get("http://localhost:3000/quizs?subjectId=" + id).then(function(res) {
                    let data = res.data;
                    $scope.dataQz = data;
                    console.log(data);
                });
            } else {
                $http.get("http://localhost:3000/quizs?_page=1&_limit=6").then(function(res) {
                    let data = res.data;
                    $scope.dataQz = data;
                    console.log(data);
                });
            }

        };

    })
}

export { quiz };