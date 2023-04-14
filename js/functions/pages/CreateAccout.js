function signUp(e){
  event.preventDefault();
  var username=document.getElementById("nameSign").value;
  var email=document.getElementById("emailSign").value;
  var password=document.getElementById("passwordSign").value;
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
  var username=document.getElementById("nameSign").value;
  var email=document.getElementById("emailSign").value;
  var password=document.getElementById("passwordSign").value;
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
function addData() {
  const fullName = document.getElementById("text").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("fullName", fullName);
  localStorage.setItem("email", email);

  // alert("Đăng ký thành công!");
}
// ĐĂNG XUẤT
let logOut=document.querySelector('.btn-hover');
let formLogout=document.querySelector('.form-logout');
logOut.addEventListener('click',function(){
    formLogout.style.display='block';
})
const closeLogout=document.querySelector('.close-logout');
closeLogout.addEventListener('click',function(){
    formLogout.style.display='none';
})
// Hàm đăng xuất
const LogOutAcc=document.getElementById('btn-LogOut');
LogOutAcc.addEventListener('click', logout);
function logout() {
	// Xóa thông tin đăng nhập khỏi localStorage
	localStorage.removeItem('username');
	localStorage.removeItem('password');

	// Chuyển hướng người dùng đến trang đăng nhập
	window.location.href = 'index.html';
}
// HÀM KIỂM TRA THÔNG TIN
const btnViewInfo = document.getElementById("btn-view-info");
btnViewInfo.addEventListener("click", function() {
  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");

  if (fullName && email) {
    const infoContainer = document.getElementById("info-container");
    infoContainer.innerHTML = `Họ tên: ${fullName}<br>Email: ${email}`;
  } else {
    alert("Chưa có thông tin người dùng");
  }
});

