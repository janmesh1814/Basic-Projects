// let h3 = document.querySelector('h3');
// let btn = document.querySelectorAll('.btn');

// h3.addEventListener
// for(bt of btn){
//     bt.addEventListener('click',function(e){
//         e.stoppropagation();
//         let level = 0;
//         h3.innerText = level+1;
//     })
// }

let gameseq = [];
let userseq = [];
let btn_color = ['red','green','yellow','blue'];
let started = false;
let level = 0;

let h3 = document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250);
}

function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    // Choosing randomcolor
    let randidx = Math.floor(Math.random()*4);
    let randcolor = btn_color[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(randidx, randcolor, randbtn);
    gameflash(randbtn);
}

function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press another key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },150)
        reset();
    }
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll('.btn');
for(btn of allbtn){
    btn.addEventListener('click',btnpress);
}
