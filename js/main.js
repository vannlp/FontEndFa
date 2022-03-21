
import router from "./web.js";
import { home } from "./controllers/home.js";
import {about} from "./controllers/about.js";
import {quiz} from "./controllers/quiz.js";
import {quizDetail} from "./controllers/quizDetail.js";
import {takeQuiz} from "./controllers/takeQuiz.js";

let app = angular.module("myApp", ["ngRoute"]);

app.run(async function($rootScope, $http) {
    $http.get("http://localhost:3000/products").then(data=>{
      $rootScope.data = data.data
    })
});

router(app);

home(app);
about(app);
quiz(app);
quizDetail(app);
takeQuiz(app);