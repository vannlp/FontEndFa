import router from "./web.js";
import { home } from "./controllers/home.js";
import { about } from "./controllers/about.js";
import { quiz } from "./controllers/quiz.js";
import { quizDetail } from "./controllers/quizDetail.js";
import { takeQuiz } from "./controllers/takeQuiz.js";
import { call } from "./controllers/call.js";
import {login, logout} from "./controllers/login.js";

let app = angular.module("myApp", ["ngRoute"]);

app.run(async function($rootScope, $http, $sce) {
    if(sessionStorage['login']){

        let user = JSON.parse(sessionStorage['login']);


        $rootScope.accountView = $sce.trustAsHtml(`
            <span>${user.name}</span>
            <a href="#!logout">Đăng xuất</a>
        `);
    }else{
        $rootScope.accountView = $sce.trustAsHtml(`
        <a href="#!login" class="btn  fw-bolder">Đăng Nhập</a>
        <a href="#!registration" class="btn bg-warning fw-bolder">Đăng ký</a>
        `);
    }
});

router(app);

home(app);
about(app);
quiz(app);
quizDetail(app);
takeQuiz(app);
login(app);
logout(app);