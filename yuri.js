
var s=document.getElementById("s"); 

s.addEventListener("click",sort123)
function sort123(){
    var arr=new Array()
var a=parseInt(document.getElementById("a").value);
var b=parseInt(document.getElementById("b").value); 
var c=parseInt(document.getElementById("c").value); 
var d=document.getElementById("d"); 
var e=document.getElementById("e"); 
var f=document.getElementById("f"); 
    arr[0]=a;
    arr[1]=b;
    arr[2]=c;
   
console.log(arr);
arr.sort(function(a, b) {
    return b-a ;
    });
    console.log("after");
console.log(arr);
    d.value=arr[0];
    e.value=arr[1];
    f.value=arr[2];
    
}

