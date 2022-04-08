function quiz(app) {
    app.controller("quizController", function($scope, $http) {

        $http.get("http://localhost:3000/quizs").then(function(res) {
            let data = res.data;
            $scope.dataQz = data;
            console.log(data);
            // Phân trang
            $scope.numberPage = 1;
            $scope.begin = 0;
            $scope.pageCount = Math.ceil($scope.dataQz.length / 6);

            $scope.prev = function() {
                if ($scope.begin > 0) {
                    $scope.begin -= 6;
                    $scope.numberPage--;
                }
            }
            $scope.next = function() {
                    if ($scope.begin < ($scope.pageCount - 1) * 8) {
                        $scope.begin += 6;
                    }
                    $scope.numberPage++;
                }
                // kêt thúc phân trang
        });

        $http.get("http://localhost:3000/subjects").then(function(res) {
            let data = res.data;
            $scope.dataSj = data;
            console.log(data);
        })

        $http.get("http://localhost:3000/quizs").then(function(res) {
            let data = res.data;
            $scope.dataQzTX = data.length / 6;
            let showData = data.length / 6;
            console.log(showData);
            // Phân trang
            $scope.numberPage = 1;
            $scope.begin = 0;
            $scope.pageCount = Math.ceil($scope.dataQz.length / 6);

            $scope.prev = function() {
                if ($scope.begin > 0) {
                    $scope.begin -= 6;
                    $scope.numberPage--;
                }
            }
            $scope.next = function() {
                    if ($scope.begin < ($scope.pageCount - 1) * 8) {
                        $scope.begin += 6;
                        $scope.numberPage++;
                    }
                }
                // kêt thúc phân trang
        });


        $scope.search = function(id) {
            if (id != null) {
                $http.get("http://localhost:3000/quizs?subjectId=" + id).then(function(res) {
                    let data = res.data;
                    $scope.dataQz = data;
                    console.log(data);
                });
            } else {
                $http.get("http://localhost:3000/quizs").then(function(res) {
                    let data = res.data;
                    $scope.dataQz = data;
                    console.log(data);
                    // Phân trang
                    $scope.numberPage = 1;
                    $scope.begin = 0;
                    $scope.pageCount = Math.ceil($scope.dataQz.length / 6);

                    $scope.prev = function() {
                        if ($scope.begin > 0) {
                            $scope.begin -= 6;
                            $scope.numberPage--;
                        }
                    }
                    $scope.next = function() {
                            if ($scope.begin < ($scope.pageCount - 1) * 8) {
                                $scope.begin += 6;
                                $scope.numberPage++;
                            }
                        }
                        // kêt thúc phân trang
                });
            }

        };


    })

}

export { quiz };