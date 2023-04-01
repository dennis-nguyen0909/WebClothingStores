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


const btnDangKy=document.getElementById('btnDangKy');
console.log(btnDangKy);

const modalDangKy=document.getElementById('modal-dangky');
console.log(modalDangKy)

modalDangKy.addEventListener('onclick',function(){
btnDangKy.style.display='block';
});











