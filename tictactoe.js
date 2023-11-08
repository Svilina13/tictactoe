console.log("file loaded");
const leftBoxTop = document.querySelector('.left-box-top');
const topBox = document.querySelector('.top-box');
const rightTopBox = document.querySelector('.right-top-box');
const leftCenterBox = document.querySelector('.left-center-box');
const centerBox = document.querySelector('.center-box');
const rightCenterBox = document.querySelector('.right-center-box');
const leftBottomBox = document.querySelector('.left-bottom-box');
const bottomBox = document.querySelector('.bottom-box');
const rightBottomBox = document.querySelector('.right-bottom-box');

const allBoxes = [leftBoxTop, topBox, rightTopBox, leftCenterBox, centerBox, rightCenterBox, leftBottomBox, bottomBox, rightBottomBox];

//every on click call a function, if x- put x- else ... event event listener 
// field threee rows 
//!!!!loop that creates rows and inside there is a loop that create elements, and adds and ID with a number identifier to each

//document.getElementsByClassName('bottom-box')[0].classList.add("X"); without the 0 its all elements; adds class to an existing class

// save in the variable and loop through it 
//event listener to a varibale for all elemenets?
// COMBINE classes, change IDs

let playerXturn = true;
if(playerXturn == true){
for (const box of allBoxes) {//loop only to find win or lose
    //check if classlist has X or O, 
 box.addEventListener(//before the loop,click, add, switch, remove the listener/or check if there is anthything inside 
   "click",
   (e) => {
     const x = document.createElement("div");
     x.classList.add("X");
     box.appendChild(x);
     box.style.pointerEvents = 'none'; //='auto' to enable
     playerXturn = false;
   },
 )
 }
 }else{
for (const box of allBoxes) {
 box.addEventListener(
   "click",
   (e) => {
     const o = document.createElement("div");
     o.classList.add("O");
     box.appendChild(o);
     box.style.pointerEvents = 'none'; //='auto' to enable
     playerXturn = true;
   },
   false,
 );
}
};
