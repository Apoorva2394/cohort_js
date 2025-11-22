let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let inner=document.querySelector(".inner");
count=0;
btn.addEventListener("click",function(){
    btn.style.pointerEvents="none";
    var num= 50+ Math.floor(Math.random()*50);
     let set=setInterval(() => {
        count++;
        h1.innerHTML=`${count}%`;
        inner.style.width=`${count}%`;
     },num);
     setTimeout(() => {
        clearInterval(set);
        btn.style.opacity="0.8";
        btn.innerHTML="Downloded";

     }, num*100);
     
})
