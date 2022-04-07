function takeQuiz(app){
    app.controller("takeQuizController", function($scope,$http, $routeParams){
        let quizId = $routeParams.quizId;
        $http.get(`http://localhost:3000/quizDetails?quizId=${quizId}`).then((res)=>{
            let dataQuiz = res.data;
            let index = 0;
            let point = 0;
            let anwsers = [];

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
            }
        })
    });
}


export {takeQuiz}