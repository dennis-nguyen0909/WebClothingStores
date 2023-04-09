
function isLogged() {
    // lấy dữ liệu từ local storage bao gồm: username & password.
    // so sánh dữ liệu đó với danh sách users đang có, nếu chúng tồn tại thì trả về true, ngược lại trả về false
    return true;
}

function handleLogin(email, password) {
    let flag=false;
    for(let i=0;i<users.length;i++){
        if(email===users[i].username&&password===users[i].password);
    }
    // kiểm tra cặp thông tin username + password có đồng thời tồn tại trong danh sách users hiện tại hay không, nếu có trả về true, nếu không thì trả về false.
    // nếu kết quả là true, thì lưu thông tin username + password vào localstorage
    // Gợi ý: key: token; value: [username] + [password]
    return true;
}

function handleLogout() {
    // Xóa toàn bộ thông tin của user ở localStorage. Chuyển hướng user về trang chủ
}