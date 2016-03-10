// // Homework: Tic Tac Toe!
// // - A user should see a 3 x 3 grid on the screen: DONE
// // - A user should be able to click on one of the spaces to place an X: DONE
// // - The computer should place an O on the board: DONE
// // - Turns should alternate between the user and the computer: DONE
// // - The game should end when 9 pieces have been placed, or 3 of the same piece (X or O) are lined in a row diagonally, horizontally, or vertically.: DONE
//
let gameArr=[];
let totalObj= {
  1: 'sqOne',
  2: 'sqTwo',
  3: 'sqThree',
  4: 'sqFour',
  5: 'sqFive',
  6: 'sqSix',
  7: 'sqSeven',
  8: 'sqEight',
  9: 'sqNine'
}

let computerArr=[];
let userArr=[];

// let computerSq;

function userClick(clicked){

    let clickedId = clicked.id; //identify which element id to display X
    let x = gameArr.indexOf(clickedId);
    if(x===-1){
      storeTurn(clickedId);
      userArr.push(clickedId);
      document.getElementById(clickedId).innerHTML = "X";

    } else{
      alert("Pick another spot.");
    }
    checkUserWin(); //checking too soon?
    catsGame();
    computerTurn();

    console.log(userArr);
    console.log(computerArr);

}

function computerTurn(){
  let x = Math.floor((Math.random() * 9) + 1);
  let computerNum = totalObj[x];

  let y = gameArr.indexOf(computerNum);

  if(y===-1){
    // var newTdid = computerNum;
    // var tdidToCreate = new Turn(newTdid);
    // gameArr2.push(tdidToCreate);
    storeTurn(computerNum);
    computerArr.push(computerNum);
    document.getElementById(computerNum).innerHTML = "O";
  } else{
      computerTurn();
    }
  }

  function storeTurn(x){
    gameArr.push(x);
  }

//wish it would work only if someone doesn't win
function catsGame(){
  let sum=0;
  for(let i=0;i<gameArr.length;i++){
    sum++;
  }
  if(sum===9){
    alert('Game Over!');
    location.reload();
  }
  else{
    return;
  }
}

//LOL--need to see how to make a loop out of this...
function checkUserWin(){
    let sqOne = userArr.indexOf('sqOne');
    let sqTwo = userArr.indexOf('sqTwo');
    let sqThree = userArr.indexOf('sqThree');
    let sqFour = userArr.indexOf('sqFour');
    let sqFive = userArr.indexOf('sqFive');
    let sqSix = userArr.indexOf('sqSix');
    let sqSeven = userArr.indexOf('sqSeven');
    let sqEight = userArr.indexOf('sqEight');
    let sqNine = userArr.indexOf('sqNine');

    let sqCOne = computerArr.indexOf('sqOne');
    let sqCTwo = computerArr.indexOf('sqTwo');
    let sqCThree = computerArr.indexOf('sqThree');
    let sqCFour = computerArr.indexOf('sqFour');
    let sqCFive = computerArr.indexOf('sqFive');
    let sqCSix = computerArr.indexOf('sqSix');
    let sqCSeven = computerArr.indexOf('sqSeven');
    let sqCEight = computerArr.indexOf('sqEight');
    let sqCNine = computerArr.indexOf('sqNine');

    if(sqOne!==-1 && sqTwo!==-1 && sqThree!==-1){
      userWins();
    } else if(sqFour!==-1 && sqFive!==-1 && sqSix!==-1){
      userWins();
    } else if(sqSeven!==-1 && sqEight!==-1 && sqNine!==-1){
      userWins();
    } else if(sqOne!==-1 && sqFour!==-1 && sqSeven!==-1){
      userWins();
    } else if(sqTwo!==-1 && sqFive!==-1 && sqEight!==-1){
      userWins();
    } else if(sqThree!==-1 && sqSix!==-1 && sqNine!==-1){
      userWins();
    } else if(sqOne!==-1 && sqFive!==-1 && sqNine!==-1){
      userWins();
    } else if(sqThree!==-1 && sqFive!==-1 && sqSeven!==-1){
      userWins();
    } else if(sqCOne!==-1 && sqCTwo!==-1 && sqCThree!==-1){
      computerWins();
    } else if(sqCFour!==-1 && sqCFive!==-1 && sqCSix!==-1){
      computerWins();
    } else if(sqCSeven!==-1 && sqCEight!==-1 && sqCNine!==-1){
      computerWins();
    } else if(sqCOne!==-1 && sqCFour!==-1 && sqCSeven!==-1){
      computerWins();
    } else if(sqCTwo!==-1 && sqCFive!==-1 && sqCEight!==-1){
      computerWins();
    } else if(sqCThree!==-1 && sqCSix!==-1 && sqCNine!==-1){
      computerWins();
    } else if(sqCOne!==-1 && sqCFive!==-1 && sqCNine!==-1){
      computerWins();
    } else if(sqCThree!==-1 && sqCFive!==-1 && sqCSeven!==-1){
      computerWins();
    } }

function isInArray(array,sq){
    return array.indexof(sq)>-1;
}

function userWins(){
  alert("User wins!");
  location.reload();
}

function computerWins(){
  alert("Computer wins!");
  location.reload();
}
