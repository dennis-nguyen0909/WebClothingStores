function signUp(){
  var username=document.getElementById("nameSign").value;
  var email=document.getElementById("emailSign").value;
  var password=document.getElementById("passwordSign").value;

  console.log({username, email, password});

  // Kiểm tra tính hợp lệ của email và mật khẩu
  if (!validateEmail(email)) {
    alert("Email không hợp lệ");
    return;
  }

  debugger
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
  var userLogin = localStorage.getItem('email');
  var userPassword = localStorage.getItem('password');
  // tranvudpqn123@gmail.com

  // Kiểm tra xem người dùng đã đăng ký hay chưa
  if (userLogin !== email) {
    alert("Email không đúng hoặc chưa đăng ký tài khoản");
    return;
  }

  // Kiểm tra mật khẩu có đúng không
  if (userPassword !== password) {
    alert("Sai mật khẩu");
    return;
  }
  
  window.location.href='Accout.html'
  alert("Đăng nhập thành công");
  
}



// // ĐĂNG XUẤT
// let logOut=document.querySelector('.btn-hover');
// let formLogout=document.querySelector('.form-logout');
// logOut.addEventListener('click',function(){
//     formLogout.style.display='block';
// })
// const closeLogout=document.querySelector('.close-logout');
// closeLogout.addEventListener('click',function(){
//     formLogout.style.display='none';
// })
// // Hàm đăng xuất
// const LogOutAcc=document.getElementById('btn-LogOut');
// LogOutAcc.addEventListener('click', logout);
// function logout() {
// 	// Xóa thông tin đăng nhập khỏi localStorage
// 	localStorage.removeItem('username');
// 	localStorage.removeItem('password');

// 	// Chuyển hướng người dùng đến trang đăng nhập
// 	window.location.href = 'index.html';
// }

