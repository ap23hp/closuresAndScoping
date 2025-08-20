
const createPlayer=(name,symbol)=>{ //createplayer is a factory function as it It builds and returns a new object each time it’s called.
   const sayHello=()=>{ 
console.log(`Hi, I’m ${name}and my symbol is ${symbol}`)
    }
 return {
    name,symbol,sayHello //Each object has its own properties (name, symbol, sayHello).
 }
}

const Alice=createPlayer("Alice","X")  //Alice is just an object returned from createPlayer.
Alice.sayHello()

//sayHello is a closure,When createPlayer("Alice","X") runs, its execution context normally disappears after finishing.
//But since sayHello uses name and symbol, JavaScript keeps those variables alive inside the closure, so that sayHello() can still access them later.
//That’s why even after createPlayer has finished, calling Alice.sayHello() still prints "Alice" and "X".
 console.log("----------exercise 2---------")
function gameBoard(str){
let board=[]
for(let i=0;i<3;i++){
let row=[]
  for(let j=0;j<3;j++){
          //  fill each cell with an empty string
 row.push(str);
}
 board.push(row); // add the row into the board
}
return board
}

//console.log(gameBoard(""))

 console.log("----------exercise 3---------")

function printBoard(board){
   
    for(let i=0 ; i<board.length ; i++){
      console.log(board[i].join("|"))
    }
    
 }
printBoard(gameBoard(""))