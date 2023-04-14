// function signUp(e){
//   event.preventDefault();
//   var username=document.getElementById("nameSign").value;
//   var email=document.getElementById("emailSign").value;
//   var password=document.getElementById("passwordSign").value;
//   var userLogin={
//       username:username,
//       email:email,
//       password:password,
//   };
//   var json =JSON.stringify(userLogin);
//   localStorage.setItem(username,json);
//   localStorage.setItem('name', username);
//   localStorage.setItem('email', email);
//   localStorage.setItem('password', password);
//   alert("đăng ký thành công")
// }
function signUp(e){
  event.preventDefault();
  var username=document.getElementById("nameSign").value;
  var email=document.getElementById("emailSign").value;
  var password=document.getElementById("passwordSign").value;

  // Kiểm tra tính hợp lệ của email và mật khẩu
  if (!validateEmail(email)) {
    alert("Email không hợp lệ");
    return;
  }

  if (!validatePassword(password)) {
    alert("Mật khẩu không hợp lệ");
    return;
  }

  var userLogin={
      username:username,
      email:email,
      password:password,
  };
  var json =JSON.stringify(userLogin);
  localStorage.setItem(username,json);
  localStorage.setItem('name', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  alert("đăng ký thành công")
}
function Login() {
  event.preventDefault();
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("passw").value;

  // Kiểm tra tính hợp lệ của email và mật khẩu
  if (!validateEmail(email)) {
    alert("Email không hợp lệ");
    return;
  }

  if (!validatePassword(password)) {
    alert("Mật khẩu không hợp lệ");
    return;
  }

  // Lấy dữ liệu người dùng đã đăng ký từ localStorage
  var userLogin = JSON.parse(localStorage.getItem(email));

  // Kiểm tra xem người dùng đã đăng ký hay chưa
  if (userLogin.email === em) {
    alert("Email không đúng hoặc chưa đăng ký tài khoản");
    return;
  }

  // Kiểm tra mật khẩu có đúng không
  if (password !== userLogin.password) {
    alert("Sai mật khẩu");
    return;
  }

  // Lưu thông tin người dùng vào localStorage
  localStorage.setItem('name', userLogin.username);
  localStorage.setItem('email', userLogin.email);

  alert("Đăng nhập thành công");
}


// function Login(){ 
//   event.preventDefault();
//   var username=document.getElementById("nameSign").value;
//   var email=document.getElementById("emailSign").value;
//   var password=document.getElementById("passwordSign").value;
//   var userLogin=localStorage.getItem(username);
//   var data=JSON.parse(user);
//   if(email == null || password == null){
//       alert("Vui lòng nhập password hoặc email")
//   }
//   else if(username==data.username && email == data.email && password == data.password){
//       alert("đăng nhập thành công")
//       window.location.href="Accout.html"
//   }
//   else{
//       alert("thất bại")
//   }
  
  
// }
// function checkForm() {
//   event.preventDefault();
//   var emailInput = document.getElementById("loginEmail").value;
//   var passwordInput = document.getElementById("passw").value;

//   var storedEmail = localStorage.getItem('email');
//   var storedPassword = localStorage.getItem('password');

//   if (emailInput === storedEmail && passwordInput === storedPassword) {
//     alert("Đăng nhập thành công");
//     window.location.href = "index.html";
//   } else {
//     document.getElementById("loginError").style.display = "block";
//   }
// }


// function addData() {
//   const fullName = document.getElementById("text").value;
//   const email = document.getElementById("email").value;

//   localStorage.setItem("fullName", fullName);
//   localStorage.setItem("email", email);

//   // alert("Đăng ký thành công!");
// }
// function showInfo() {
//   // Lấy thông tin người dùng từ form đăng ký
//   const name = document.getElementById('nameSign').value;
//   const email = document.getElementById('emailSign').value;
//   const password = document.getElementById('passwordSign').value;
//   const nameUser = localStorage.getItem('name');
//   const emailUser = localStorage.getItem('email');
//   const passwordUser = localStorage.getItem('password');
//   // Kiểm tra nếu chưa nhập đủ thông tin thì hiển thị thông báo lỗi
//   if (name === '' || email === '' || password === '') {
//     alert('Vui lòng nhập đủ thông tin đăng ký.');
//     return;
//   }
  
//   // Hiển thị thông tin lên trang HTML
//   const userInfoDiv = document.getElementById('btn-view-info');
//   userInfoDiv.innerHTML = `
//     <p>Họ và tên: ${nameUser}</p>
//     <p>Email: ${emailUser}</p>
//     <p>Mật khẩu: ${passwordUser}</p>
//   `;
// }
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

