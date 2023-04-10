// var mockdata=[
//     {
//         productIdData: 1,
//         productName: 'LEVENTS® BASIC SHIRT /WHITE',
//         price: '380.000vnd',
//         avatar2:'./img/ao1.jpeg',
//         moreImage: ['', '', '', ''],
//         alias: '',
//         description: '',
//         amount: 0,
//         viewCount: 0,
//         likeCount: 0
//     },
// ]
// var productsSearch=document.getElementById('list-search');
// mockdata.forEach(iteam =>{
//     var newProducts=document.createElement('div');
//     newProducts.classList.add('search-btn-more');
//     newProducts.innerHTML=`
//     <div  class="product-shirt-search">
//         <div class="product-shirt-search-child">
//             <a class="product-shirt-a-child" href="">
//                 <img class="product-shirt-3 "${iteam.avatar2}" alt="MatSau">
//             </a>
//         </div>
//         <div class="product-shirt-price">
//             <h1 class="product-shirt-title">${iteam.productName}</h1>
//             <p class="product-shirt-title ">${iteam.price}</p>
//         </div>
//     </div>  
//     `
//     productsSearch.appendChild(newProducts);
// })
function timkiem(){
    var a;
    var input=document.getElementById('input');
    var filter=input.value.toUpperCase();
    var ul=document.getElementById('myUL');
    var li=ul.getElementsByTagName('li');
    for(var i=0;i< li.length;i++){
        a=li[i].getElementsByTagName("a")[0];
        var txtValue=a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display=" ";
        }
        else{
            li[i].style.display='none';
        }
    }
}