let dice1=document.querySelector(".dice");
let button=document.querySelector("button");


button.addEventListener("click", function(){
    let random_num=Math.floor((Math.random()*6)+1);
    dice1.style.boxShadow="10px 5px 1px black";
    dice1.style.border=" 2px solid black";
    dice1.style.borderRadius=" 30px";
    switch(random_num){
        case 1:
            dice1.style.backgroundImage='url(./images/1.png)';
            break;
        case 2:
            dice1.style.backgroundImage='url(./images/2.png)';
            break;
        case 3:
            dice1.style.backgroundImage='url(./images/3.jpeg)';
            break;
        case 4:
            dice1.style.backgroundImage='url(./images/4.png)';
            break;
        case 5:
            dice1.style.backgroundImage='url(./images/5.png)';
            break; 
        case 6:
            dice1.style.backgroundImage='url(./images/6.jpeg)';
            break;
    }
})