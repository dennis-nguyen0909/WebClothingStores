
const emailInputElm=document.getElementById('loginEmail');


const passwordInputElm=document.getElementById('passw');

const btnsubmit=document.getElementById('btnLoginSubmit');
const errorLoginMessage=document.getElementById('loginError');


btnsubmit.addEventListener('click',function(){
    const email =emailInputElm.value;
    const password=passwordInputElm.value;
    const flag=handleLogin(email,password);
    const isAccept=isEmpty(email);
    
    if(isEmpty(email)){
        // nếu email rỗng
        errorLoginMessage.style.display='block';
        errorLoginMessage.innerText='Vui lòng nhập email';
        return ;
    }
    if(isEmpty(password)){
        // nếu email rỗng
        errorLoginMessage.style.display='block';
        // Thay đổi đoạn text
        errorLoginMessage.innerText='Vui lòng nhập password';
        return ;
    }

    if(flag){
            //đá qua trang homepage
            window.location="http://127.0.0.1:5500/Accout.html";
           modalElm.style.display='none';
        errorLoginMessage.style.display='none';
        const token=`${email}+${password}`;
        setLocalStorageData('token',token);
    }else{
            // thông báo lỗi
        errorLoginMessage.style.display='block';
        errorLoginMessage.innerText='Sai email/password';
    }
    // console.log(flag);

});

function checkForm(){
    const username=document.getElementById('text').value;
    document.getElementById('result').innerText=username;
    var resultName=username;
    const email=document.getElementById('email').value;
    document.getElementById('result').innerText=email;
    var resultEmail=email;
    const birth=document.getElementById('birth').value;
    document.getElementById('result').innerText=birth;
    var resultBirth=birth;
    const phone=document.getElementById('phone').value;
    document.getElementById('result').innerText=phone;
    var resultPhone=phone;
}
// let users=[
//     {
//         name:'${resultName}',
//         email:'${resultEmail}',
//         phone: '${resultPhone}',
//         birthday:'${resultBirth}',
//     }
// ]
// var nams=localStorage.setItem(resultName,'ten nguoi dung');
// console.log(nams);
setLocalStorageData(username,"Ten nguoi dung")