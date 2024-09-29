const btn1=document.querySelector(".modal-btn");
const abc=document.querySelector(".modal-overlay");
const btn2=document.querySelector(".close-btn");

console.log(btn1);
console.log(btn2);
console.log(abc);
btn1.addEventListener("click",function(){
    abc.classList.add('open-modal');
});
btn2.addEventListener("click",function(){

    abc.classList.remove('open-modal');
});





// const modalBtn = document.querySelector(".modal-btn");
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", function () {
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("open-modal");
// });
