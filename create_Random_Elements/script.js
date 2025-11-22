let main=document.querySelector(".main");
let left=document.querySelector(".left");
let right=document.querySelector(".right");
let button1=document.querySelector(".b1");
let button2=document.querySelector(".b2");

//for button 1
button1.addEventListener("click",function(){
    let div=document.createElement("div");
    div.style.height="100px";
    div.style.width="100px";
    div.style.position="absolute";
    console.log("hello");
    let x=Math.random()*100;
    let y=Math.random()*100;
    let angle = Math.random() * 360;
    //to generate colour
    let c1=Math.floor(Math.random()*256);
    let c2=Math.floor(Math.random()*256);
    let c3=Math.floor(Math.random()*256);
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    div.style.left=x+"%";
    div.style.top=y+"%";
    left.appendChild(div);
    div.style.rotate= angle+"deg";
})

//for button 2
let arr=["HELLO","BYE","How are you?","Take care","good bye!!","see you!","tadaaaaaaaaaaa!","wohoooooooo!!!!!!!!!!!!!!"]
button2.addEventListener("click" ,function(){
    let div=document.createElement("div");
    let x=Math.random()*100;
    let angle = Math.random() * 360;
    let y=Math.random()*100;
    let ran=Math.floor(Math.random()*8);
    div.innerHTML=`${arr[ran]}`;
    div.style.color="white";
    div.style.position="absolute";
    div.style.left=x+"%";
    div.style.top=y+"%";
    div.style.rotate= angle+"deg";
    right.appendChild(div);
})
