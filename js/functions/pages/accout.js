// token dang nhap
// var tokenUser=getLocalStorageData('token');
// console.log("USER:",tokenUser);
var data=[];
function add(){
    var item_ID=document.getElementById('id').value;
    var item_Name=document.getElementById('name').value;
    var item_Age=document.getElementById('age').value;
    let users={
        ID:item_ID,
        NAME:item_Name,
        AGE:item_Age
       }
       let index=data.findIndex((c)=>c.ID== users.ID);
       if(index >= 0){
        data.splice(index,1,users);
       }else{
        data.push(users);
       }
       render();
       clear();
}
function render(){
        table =`
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        `
        for(let i=0;i<data.length;i++){
            table += `
            <tr>
                <th>${data[i].ID}</th>
                <th>${data[i].NAME}</th>
                <th>${data[i].AGE}</th>
                <th>  
                    <button onclick="deleteItem(${data[i].ID})">Delete</button>
                    <button onclick="editItem(${data[i].ID})">Edit</button>
                 </th>

            </tr>
            `
        }
        document.getElementById('render').innerHTML=table;
 }
 function clear(){
    document.getElementById('id').value="";
    document.getElementById('name').value="";
    document.getElementById('age').value="";

}
function deleteItem(x){
        for(let i=0;i<data.length;i++){
            if(data[i].ID==x){
                // Xoa1 xong phai render lai
                data.splice(i,1);
                render();

            }
        }
}
function editItem(x){
    for(let i=0;i<data.length;i++){
        if(data[i].ID == x){
            document.getElementById('name').value=data[i].NAME;
            document.getElementById('age').value=data[i].AGE;
            document.getElementById('id').value=data[i].ID;


        }
     }

}

// TẢI AVT LÊN FORM THÔNG TIN
let profilePic=document.getElementById('profile-pic');
let inputFile=document.getElementById('input-file');
let upload=document.getElementById('upload');



inputFile.onchange=function(){
    profilePic.src=URL.createObjectURL(inputFile.files[0]);
}