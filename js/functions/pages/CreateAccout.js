function signUp(e){
    event.preventDefault();
    var username=document.getElementById("text").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password1").value;
    var userLogin={
        username:username,
        email:email,
        password:password,
    };
    var json =JSON.stringify(userLogin);
    localStorage.setItem(username,json);
    alert("đăng ký thành công")
}
function Login(){ 
    event.preventDefault();
    var username=document.getElementById("text").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password1").value;
    var userLogin=localStorage.getItem(username);
    var data=JSON.parse(user);
    if(user == null){
        alert("Vui lòng nhập password hoặc email")
    }
    else if(username==data.username && email == data.email && password == data.password){
        alert("đăng nhập thành công")
        window.location.href="Accout.html"
    }
    else{
        alert("thất bại")
    }
    
    
}