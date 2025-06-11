let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
let max=0;

let started=false;
let level=0;

 let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started === false){
        console.log("Game is Started");
        started=true;
        levelUp();
    }
    
});

function gameFlash(btn){
  btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function userFlash(btn){
  btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}

function levelUp(){
    userSeq = [];
    level++;   
    h2.innerText=`Level ${level}`;
    
    let btnidx = Math.floor(Math.random()*4);
    let randColor = btns[btnidx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function btnPress(){ 
    let btn=this;
   userFlash(btn);
   let userColor=btn.getAttribute("id");   
   userSeq.push(userColor);
   //console.log("user pressed color: ",userSeq);
   checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
        }         
    }
    else{
        max=Math.max(max,level-1);
        h2.innerHTML=`Game Over! Your Score is <b>${level-1}</b> <br> press any key on KeyBoard to Restart <br>Higest Score: ${max}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
      
    }
}

function reset(){
    started=false;
    gameSeq= [];
    userSeq = [];
    level = 0;
}




