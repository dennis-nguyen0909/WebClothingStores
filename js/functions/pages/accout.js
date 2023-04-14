// TẢI AVT LÊN FORM THÔNG TIN
let profilePic=document.getElementById('profile-pic');
let inputFile=document.getElementById('input-file');
let upload=document.getElementById('upload');
// inputFile.onchange=function(){
//     profilePic.src=URL.createObjectURL(inputFile.files[0]);
// }
// START:ẨN/HIỆN THÔNG TIN CÁ NHÂN
const form = document.getElementById("form-ttcn");
const btn = document.getElementById("btn-show-form");
function toggleForm() {
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
}
// btn.addEventListener("click", toggleForm);
// END:ẨN/HIỆN THÔNG TIN CÁ NHÂN
// START:ẨN/HIỆN ĐƠN HÀNG
function showOrderForm() {
  // Lấy đối tượng div chứa form
  var orderForm = document.getElementById("form-donhang");
  // Kiểm tra nếu form đã được hiển thị thì ẩn nó đi
  if (orderForm.style.display === "none") {
    orderForm.style.display = "block";
  } 
  // Ngược lại, hiển thị form lên
  else {
    orderForm.style.display = "none";
  }
}
// END:ẨN/HIỆN ĐƠN HÀNG
//START:: VOUCHER
const addVoucherBtn = document.getElementById("add-voucher-btn");
const voucherList = document.querySelector(".voucher-list ul");
addVoucherBtn.addEventListener("click", function() {
const newVoucherInput = document.getElementById("new-voucher-input");
const newVoucherName = newVoucherInput.value.trim();
// Kiểm tra giá trị nhập vào có hợp lệ không
if (newVoucherName.length === 0) {
    alert("Vui lòng nhập tên Voucher");
    return;
}
  // Tạo phần tử mới và thêm vào cuối danh sách
const newVoucher = document.createElement("li");
newVoucher.textContent = newVoucherName;
voucherList.appendChild(newVoucher);
  // Hiển thị thông báo thành công và reset giá trị trong ô input
  alert("Thêm Voucher thành công");
  newVoucherInput.value = "";
});

const formVoucher = document.getElementById("voucher-list");
const btnVouhcer = document.getElementById("toggle-voucher-btn");
function voucherForm() {
    if (formVoucher.style.display === "none") {
      formVoucher.style.display = "block";
    } else {
      formVoucher.style.display = "none";
    }
}
btnVouhcer.addEventListener('click',voucherForm());
// END::VOUCHER
// START::ĐĂNG XUẤT
const LogOut1=document.getElementById('logout-1');
LogOut1.addEventListener('click', logout);
function DangXuat() {
// Xóa thông tin đăng nhập
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  // Đổi trang web
  window.location.href = "index.html";

  // Hiển thị thông báo đăng xuất thành công
  var logoutMessage = document.createElement("div");
  logoutMessage.innerText = "Bạn đã đăng xuất thành công!";
  logoutMessage.classList.add("logout-message");
  document.body.appendChild(logoutMessage);

  // Ẩn thông báo sau 3 giây
  setTimeout(function() {
    logoutMessage.style.display = "none";
  }, 3000);
}