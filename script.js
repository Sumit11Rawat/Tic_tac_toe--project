console.log("Welcome to Tic Tac Toe");
// let music=new Audio("music.mp3");
let bgmusic=new Audio("bg_music.mp3");

let play_sound =new Audio("ting.mp3");
let win=new Audio("victory.mp3");
// let dance= new VideoColorSpace("img1.mp4");
// let dance=Video("img1.mp4");
let dance = document.getElementById("myvid"); 
 let chk=false;

let turn="X";


// function to change the turn of current user
const change_turn= () =>{
    if(turn === "X"){
        return "0";
    }
    else{
        return "X";
    }
}


// to change the mode of current page
let boyd=document.querySelector("body");
let curr_mode="light";
let modebtn=document.querySelector("#mode");
modebtn.addEventListener('click',()=>{
    if(curr_mode==="light"){
        curr_mode="dark";
        // make background black
        document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");


    }
    else{
        curr_mode="light";
        // make background white
        document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(curr_mode);
    
})
const mp = new Map();
// function to win if someone is winning or not
const is_winning=()=>{
    // get all div of box
    let boxText=document.getElementsByClassName('boxtext');
    // brute force all the winning conditions
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
      if((boxText[e[0]].innerText===boxText[e[1]].innerText) && (boxText[e[1]].innerText===boxText[e[2]].innerText) && (boxText[e[0]].innerText!==''))  {
        document.querySelector('.info').innerText = boxText[e[0]].innerText + ' WON'    
    //    mp.set(e,(mp.get(e)+1));
        // console.log(e);
        chk=true;
        win.play();
        bgmusic.pause();
       
        document.querySelector('.vidbox').getElementsByTagName('video')[0].style.width="200px";
 
        for(let i=0;i<100;i++){
            dance.play();
        }



    }

    })



}

// final game logic
let boxes=document.getElementsByClassName("box");
// iterate over the html collection returned by above 
// array.from convert it to array so i can iterate over it
Array.from(boxes).forEach(element=>{

    let box_text=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(box_text.innerText === '' ){
            bgmusic.play();
            box_text.innerText=turn;
            turn=change_turn();
            play_sound.play();
              is_winning();
 
            if(!chk){
             document.getElementsByClassName("info")[0].innerText =  "Turn for " + turn;
            }
            else{
       
                if(chk){
                    
                    return false;

                }
              
            }
             
        }
        if(chk){
            return false;
        }
    })

})

// adding onclick event listener for reset button 
reset.addEventListener('click',(e)=>{
   let boxText=document.querySelectorAll('.boxtext');
   Array.from(boxText).forEach(element=>{
    element.innerText=""
   })
   turn="X";
   chk=false;
   document.getElementsByClassName("info")[0].innerText =  "Turn for " + turn;
   document.querySelector('.vidbox').getElementsByTagName('video')[0].style.width="0px";

})