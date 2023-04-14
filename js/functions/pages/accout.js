// TẢI AVT LÊN FORM THÔNG TIN
let profilePic=document.getElementById('profile-pic');
let inputFile=document.getElementById('input-file');
let upload=document.getElementById('upload');
  
inputFile.onchange=function(){
    profilePic.src=URL.createObjectURL(inputFile.files[0]);
}

  