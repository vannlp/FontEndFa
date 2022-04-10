function login(app){
    app.controller("loginController",function($scope, $http){
        $scope.handleLogin = async ()=>{
            let email = $scope.email;
            let pass = $scope.password;


            if(!email || !pass){
                alert("Tên đăng nhập, mật khẩu không được bỏ trống");
                return;
            }

            let checkEmail = await $http.get("http://localhost:3000/users?email=" + email);
            
            if(!checkEmail){
                alert("Tài khoản email không tồn tại");
                return;
            }

            let user = checkEmail.data[0];

            if(user.password != pass){
                alert("Mật khẩu không đúng")
                return;
            }

            sessionStorage['login'] = JSON.stringify({
                'email': user.email,
                'username': user.username,
                'name': user.name,
                'role': user.role,
                'id': user.id
            });

            alert("Đăng nhập thành công");

            window.location.href = "/";
        }
    });
}


export {login};