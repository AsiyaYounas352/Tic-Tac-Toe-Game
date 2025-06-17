
let boxes = document.querySelectorAll('.box');
let reset= document.querySelector('#reset');
let msgcontainer = document.querySelector('.msg');
let newgame = document.querySelector('#newgame');
let msg = document.querySelector("#winner");

let turnO = true;

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
const resetGame = ()=>{
  turnO = true;
  enablebtn();
  msgcontainer.classList.add("hide");
}

const player1 = (box)=>{
  box.style.color = "green";
}

const player2 = (box)=>{
  box.style.color = "red";
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box is clicked")
        // box.innerText.style.color = "red";
        if (turnO){
          player1(box);
          box.innerText = "O"
          turnO = false;
        }
      else{
        player2(box);
        box.innerText = "X"
        turnO = true
      }
      box.disabled = true
      checkWinner();
    })
})

const checkWinner = ()=>{
  for (let pattern of winningPatterns){
    let val1 =boxes[pattern[0]].innerText;
    let val2 =boxes[pattern[1]].innerText;      
    let val3 =boxes[pattern[2]].innerText;
    if (val1 === "" || val2 === "" || val3 === ""){
        continue;
    }
    else if (val1 === val2 && val2 === val3){
        // alert(`${val1} is the winner`);
        // boxes[pattern[0]].style.backgroundColor = "green";
        // boxes[pattern[1]].style.backgroundColor = "green";
        // boxes[pattern[2]].style.backgroundColor = "green";
        showWinner(val1)
       
    }
  }
}
const disablebtn = ()=>{
  boxes.forEach((box)=>{
    box.disabled = true;
  })
}


const enablebtn = ()=>{
  boxes.forEach((box)=>{
    box.disabled = false;
    box.innerText = "";
  })
}

const showWinner = (val)=>{
  msg.innerText= `congratulations ${val} you are the winner`;
  msgcontainer.classList
  .remove("hide");
  disablebtn();
}


reset.addEventListener("click", resetGame);
newgame.addEventListener("click", ()=>{
  resetGame();
  msgcontainer.classList.add("hide");
})



let count = 0;
boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
    count++;
    if (count === 9){
      msg.innerText= "game is drawww"
      msgcontainer.classList
      .remove("hide");  
      disablebtn();
    }
  })
})