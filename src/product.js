var products = [];
function fetch(){
    Name=document.getElementById("pname").value;
    id=document.getElementById("pid").value;
    price=document.getElementById("price").value;
    if(checkid(id))
    {
        add(Name,id,price); 
        display();     
       
    }
    else{
window.alert("sam id");
    }
    
}
function checkid(pid){
    var count=true;
    for(var i=0;i<products.length;i++)
    {
    if(pid==products[i].productId){
        count=false;
    }
    }return count;
}
function add(n,i,p){
    products.push({"productId":i,"productName":n,"productPrice":p});
    
}
function display(){
    table=document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    for (var i=0; i<products.length; i++){
        cell1.innerHTML = products[i].productId;
        cell2.innerHTML = products[i].productName;
        cell3.innerHTML = products[i].productPrice;
    }
}