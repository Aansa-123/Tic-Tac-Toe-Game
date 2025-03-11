let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msgcont = document.querySelector(".msg-container");
let msgbody = document.querySelector("#msg");
let turnO = true;
const winPtrn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledbox = () => {
    for (let box of boxes) {
        box.disabled = true ;
    }
    
}

const enabledbox = () => {
    for (let box of boxes) {
        box.disabled = false ;
        box.innerHTML = "" ;
    }
    rstbtn.classList.remove("rstbn");
}

const showWinner = (winner) => {
    msgbody.innerHTML = `Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    rstbtn.classList.add("rstbn");
    disabledbox();
    
}

const resetgame = () => {
    turnO = true;
    enabledbox();
    msgcont.classList.add("hide");
}

const checkWinner = () => {
  for (let winner of winPtrn) {
      let pos1 = boxes[winner[0]].innerHTML;
      let pos2 = boxes[winner[1]].innerHTML; 
      let pos3 =  boxes[winner[2]].innerHTML;
      if(pos1 != "" && pos2 != "" && pos3 != "") {
        if(pos1 === pos2 && pos2 === pos3){
            
            
            showWinner(pos1);
        }
      }
  }
};

newbtn.addEventListener("click" , resetgame);
rstbtn.addEventListener("click" , resetgame);
