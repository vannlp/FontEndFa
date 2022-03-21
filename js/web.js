function router(app) {
    console.log(123);
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./page/home.html",
                controller: "homeController"
            })
            .when("/about", {
                templateUrl: "./page/about.html",
                controller: "aboutController"
            }).when("/gioi-thieu", {
                templateUrl: "./page/gioi_thieu.html",
            }).when("/quiz", {
                templateUrl: "./page/quiz.html",
                controller: "quizController"
            }).when("/quiz/:quizId", {
                templateUrl: "./page/quiz-detail.html",
                controller: "quizDetailController"
            }).when("/quiz/:quizId/take", {
                templateUrl: "./page/take_quiz.html",
                controller: "takeQuizController"
            }).when("/call", {
                templateUrl: "./page/call.html",
                controller: "callController"
            });
    });
}

export default router;