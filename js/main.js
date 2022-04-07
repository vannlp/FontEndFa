import router from "./web.js";
import { home } from "./controllers/home.js";
import { about } from "./controllers/about.js";
import { quiz } from "./controllers/quiz.js";
import { quizDetail } from "./controllers/quizDetail.js";
import { takeQuiz } from "./controllers/takeQuiz.js";
import { call } from "./controllers/call.js";
import {login} from "./controllers/login.js";
import {register} from "./controllers/register.js";

let app = angular.module("myApp", ["ngRoute"]);

app.run(async function($rootScope, $http, $sce) {
    if(sessionStorage['login']){
        let user = JSON.parse(sessionStorage['login']);
        $rootScope.checkLogin = {
            check: true,
            name: user.name 
        };
    }else{
        $rootScope.checkLogin = {
            check: false,
            name: null 
        };
    }

    $rootScope.logout = function(){
        sessionStorage.clear('login');
        window.location = "/";
    }
});


router(app);

home(app);
about(app);
quiz(app);
quizDetail(app);
takeQuiz(app);
login(app);
