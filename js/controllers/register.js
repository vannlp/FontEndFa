function register(app){
    app.controller("registerController", function($scope,$http){
        $scope.handleRegister = function(){
            let username1 = $scope.username1;
            let password1 = $scope.password1;
            let email1 = $scope.email1;
            let name1 = $scope.name1;

            var data = {
                username:username1,
                password:password1,
                email:email1,
                name:name1,
                role: 2
            };

            if(!username1 || !email1 || !password1 || !name1){
                alert("Tên đăng nhập, Email, mật khẩu, name không được để trống");
                return;
            }else{
                $http.get("http://localhost:3000/users?email=" + email1).then((res)=>{ 
                    if(res.data.length != 0){
                        alert("Email đã tồn tại");
                        return;
                    }
                    $http.post('http://localhost:3000/users',data).then(()=>{
                        alert ("Đăng kí thành công");
                    })
                })
            }


        };
        
    });
}


export {register}