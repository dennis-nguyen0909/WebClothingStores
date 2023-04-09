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

// SLIDER========================================
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 3000);

// ==================FROM:SEARCH

const modalSearch=document.querySelector('.modal-search');

// const iconSearch=document.getElementById('icon-search');
const formSearch = document.getElementById('iconSearch');
console.log(modalSearch);
console.log(formSearch);

formSearch.addEventListener('click',function(){
    modalSearch.style.display='block';

});

const formCancle=document.getElementById('formCancle');
formCancle.addEventListener('click',function(){
    modalSearch.style.display='none';
});
// modalSearch.addEventListener('click',function(){
// modalSearch.style.display='none';
// });


const formCart=document.querySelector('.form-cart');
console.log(formCart);
const iconCart=document.getElementById('iconCart');
console.log(iconCart);
iconCart.addEventListener('click',function(){
    formCart.style.display="block";

});
const closeCart=document.getElementById("closeCart");
closeCart.addEventListener('click',function(){
    formCart.style.display="none";
})
// ===============================

const headerNotice=document.querySelector(".header-notice");
const Notice=document.querySelector(".notice");
headerNotice.addEventListener('click',function(){
    Notice.style.display="block";
})







