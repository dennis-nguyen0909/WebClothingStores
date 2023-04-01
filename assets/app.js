// =========================Form: Dang Nhao========================
const btnCloseModalElm = document.getElementById('btnCloseModal');
const formLoginElm = document.getElementById('formLogin');
console.log(formLoginElm)
const modalElm = document.getElementById('modal');
const containerFormElm = document.getElementById('containerForm');

console.log("containerFormElm: ", containerFormElm)

btnCloseModalElm.addEventListener('click', function() {
    modalElm.style.display = 'none';
});
formLoginElm.addEventListener('click', function() {
    modalElm.style.display = 'block';
});
modalElm.addEventListener('click', function() {
    modalElm.style.display = 'none';
});
containerFormElm.addEventListener('click', function(event) {
    console.log('title: ', event);
    event.stopPropagation();
});

// ========================Form:DANG KY========================
const btnDangKy=document.querySelector('.auth-form__dangky--theA');
console.log(btnDangKy);

const modalDangKy=document.getElementById('modal-dangky-btn');
console.log(modalDangKy)

btnDangKy.addEventListener('click',function(){
modalDangKy.style.display='block';
});

const btnCloseDangKy=document.getElementById('btnCloseModalTwo');
btnCloseDangKy.addEventListener('click', function() {
    modalDangKy.style.display = 'none';
});
const containerFormDangKy=document.getElementById('containerFormDangKy');

containerFormDangKy.addEventListener('click',function(event){
    console.log(event);
event.stopPropagation();
});
modalDangKy.addEventListener('click', function() {
    modalDangKy.style.display = 'none';
});










