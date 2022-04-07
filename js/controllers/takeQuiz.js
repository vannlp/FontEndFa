function takeQuiz(app){
    app.controller("takeQuizController", function($scope,$http, $routeParams, $timeout){
        if(!sessionStorage['login']){
            window.location.href = "#!/login";
        }   


        let quizId = $routeParams.quizId;
        $scope.soCau = 0;
        $scope.soCauDung = 0;
        $scope.Diem = 0;

        
        
        $http.get(`http://localhost:3000/quizDetails?quizId=${quizId}`).then((res)=>{
            let dataQuiz = res.data;
            let index = 0;
            let point = 0;
            let anwsers = [];
            let cauDung = 0;



            var p = 10 - 1;
            var g = 59;
            $scope.counter = p + ":" + g;

            $scope.onTimeout = function(){
                if(g != 0)
                {
                    g--;
                }
                else
                {
                    p--;
                    g = 59;
                }
                if(p == 0 && g == 0)
                {
                    alert("Hết giờ");
                }
                $scope.counter = p + ":" + g;
                mytimeout = $timeout($scope.onTimeout,1000);

                if(p == 0 && g == 0)
                {
                    $timeout.cancel(mytimeout);
                }
            }
            var mytimeout = $timeout($scope.onTimeout,1000);

            for(let i = 0; i < dataQuiz.length; i++){
                let a = {
                    'id': i,
                    'id_aw': undefined
                }

                anwsers[i] = a;
            }

            console.log(anwsers);

            $scope.quizAs = dataQuiz[index];
            function checkBtn(){
                if(index === 0){
                    $scope.checkPrevious = false;
                }else{
                    $scope.checkPrevious = true;
                }
                if(index === dataQuiz.length - 1){
                    $scope.checkNext = false;
                }else{
                    $scope.checkNext = true;
                }
            }

            checkBtn();
            function addAnwsers(){
                anwsers.forEach((val, i)=>{
                    if(index === i){
                        anwsers[i].id_aw = $scope.answer;
                    }
                })

                // anwsers.push(anwser);
                $scope.answer = undefined;
            }
            function HAnwsers(){ 
                anwsers.forEach((val, i)=>{
                    if(index === i){
                        if(anwsers[i].id_aw !== undefined){
                            $scope.answer = anwsers[i].id_aw;
                        }
                    }
                })

            }

            function scorePoint(){
                let m = 10/dataQuiz.length;
                anwsers.forEach((val, i)=>{
                    if(dataQuiz[i].mark == val.id_aw){
                        point += m;
                        cauDung++;
                    } 
                })

                console.log(point);
            }

            $scope.next = ()=>{
                addAnwsers();
                index++;
                HAnwsers();
                $scope.quizAs = dataQuiz[index];
                checkBtn();
            }
            $scope.previous = ()=>{
                index--;
                HAnwsers();
                $scope.quizAs = dataQuiz[index];
                checkBtn();
            }
            $scope.ketthuc = ()=>{
                addAnwsers();
                HAnwsers();
                scorePoint();
                endQuiz();
            }

            function endQuiz () {
                $scope.soCau = anwsers.length;
                $scope.Diem = point;
                $scope.soCauDung = cauDung;
            }

            $scope.saveQuiz = ()=>{
                let userid = JSON.parse(sessionStorage['login']).username;
                let now = new Date();
                let dataPost = {
                   "quizId":quizId,
                    "username":userid,
                    "created_date": now,
                    "point": point
                };
                $http.post("http://localhost:3000/quizs_history", dataPost).then((res)=>{
                    window.location.href = "/";
                });
            }
        })
    });
}


export {takeQuiz}