console.log("file loaded");

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const boxes = document.getElementsByClassName('box');
const winnerContainer = document.querySelector('.winnerContainer');

const restartButton = document.querySelector('.restart');
let observer; //has to be declared globally outside of any function in order to have a reference to it every time you restart and create a new observer
let timeoutID;
let playerXwon = true;

function gameOn(){
  const cx1 = one.querySelector('.X');
  const cx2 = two.querySelector('.X');
  const cx3 = three.querySelector('.X');
  const cx4 = four.querySelector('.X');
  const cx5 = five.querySelector('.X');
  const cx6 = six.querySelector('.X');
  const cx7 = seven.querySelector('.X');
  const cx8 = eight.querySelector('.X');
  const cx9 = nine.querySelector('.X');

  const co1 = one.querySelector('.O');
  const co2 = two.querySelector('.O');
  const co3 = three.querySelector('.O');
  const co4 = four.querySelector('.O');
  const co5 = five.querySelector('.O');
  const co6 = six.querySelector('.O');
  const co7 = seven.querySelector('.O');
  const co8 = eight.querySelector('.O');
  const co9 = nine.querySelector('.O');


    if(cx1 && cx2 && cx3 || cx4 && cx5 && cx6 || cx7 && cx8 && cx9){
      playerXwon = true;
      handleWin();
    } else if(co1 && co2 && co3 || co4 && co5 && co6 || co7 && co8 && co9){
      playerXwon = false;
      handleWin();
    } else if(cx1 && cx4 && cx7 || cx2 && cx5 && cx8 || cx3 && cx6 && cx9){
      playerXwon = true;
      handleWin();
    } else if(co1 && co4 && co7 || co2 && co5 && co8 || co3 && co6 && co9){
      playerXwon = false;
      handleWin();
    } else if(cx1 && cx5 && cx9 || cx3 && cx5 && cx7){
      playerXwon = true;
      handleWin();
    } else if(co1 && co5 && co9 || co3 && co5 && co7){
      playerXwon = false;
      handleWin();
    }else{
      console.log("Game still going")
      document.addEventListener('click', function(event){
        if(event.target.matches('.box')){
          winnerContainer.textContent = '';
          clearTimeout(timeoutID); //which timeout you want to clear has to be specified to restart your timeout to avoid multiplication
          timeoutID = setTimeout(gameOn, 1000);
        }
      });
    }
  };

function startObserver(){
  observer = new MutationObserver(gameOn);
  const config = {childList: true};
  const targetNode = document.body;
  observer.observe(targetNode, config);
  }

  startObserver();

  let playerXturn = true;

function handleClick(event){
  const clickedElement = event.target;

  if(playerXturn){
    const x = document.createElement("div");
    x.classList.add("X");
    clickedElement.appendChild(x);
    playerXturn = false;
    clickedElement.style.pointerEvents = 'none';
  } else {
    const o = document.createElement("div");
    o.classList.add("O");
    clickedElement.appendChild(o);
    playerXturn = true;
    clickedElement.style.pointerEvents = 'none';
    }
  };

for(var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', handleClick, false);
} 

function handleWin(){
  if(playerXwon){
    winnerContainer.textContent = 'Player X WON!';
    winnerContainer.style.color = '#FFC0CB';
    restart();
  }else{
    winnerContainer.textContent = 'Player O WON!';
    winnerContainer.style.color = '#BCB88A';
    restart();
  }
}

function restart(){
  console.log("restart");
  const boxes = document.getElementsByClassName('box');
  for(const box of boxes){
    box.innerHTML='';
    box.style.pointerEvents = 'auto';
  }
  playerXturn = true;
  startObserver();
  setTimeout(gameOn, 500); //timeout allows DOM to get updated after the restart and allows observer time to be set up;
}

  restartButton.addEventListener('click', restart, false);

































