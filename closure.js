function makeAdding(firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting(secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  };
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)); // logs 7

//Even though makeAdding finished running, the inner function (resulting) remembers the variable first.
//That’s called a closure:

//A closure allows a function to “remember” variables from the scope in which it was created.

//So resulting remembers first = 5.
//makeAdding(5) → returns a new function with first fixed as 5.

//add5 is that new function.

//When you call add5(2), you’re passing the secondNumber.

//Closure makes sure first = 5 is still remembered.


// function createUser (name) {
//   const discordName = "@" + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;

//   return { name, discordName, getReputation, giveReputation };
// }

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();

// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation()
// });
// logs { discordName: "@josh", reputation: 2 }
//This is a common pattern in JavaScript called a factory function with closures.
// It lets you create multiple “instances” (like users).
//It hides private data (reputation) so no one can mess with it directly.
//It only exposes controlled ways to interact with that data (getReputation, giveReputation).
//It’s almost like having private fields in a class, but using functions and closures instead.
  const calculator = (function () {
  const log = (operation, result) => {
    console.log(`Performed ${operation}, result = ${result}`);
  };

  const add = (a, b) => {
    const result = a + b;
    log("addition", result); // private helper used internally
    return result;
  };

  return { add }; // only expose add
})();

//calculator.add(2, 3);  // logs: Performed addition, result = 5
//calculator.log("hack", 999); // ❌ not accessible
//Everything inside the IIFE is private by default.

//Only what you return becomes public.

//This gives you encapsulation → you control exactly what outside code can see and use.

// const dog = 'snickers';

// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = 'sunny';
//   logDog();
// }

// go();

//snickers
//A function’s scope is determined by where it is created, not where it is called.

function go() {
  const dog = 'sunny';

  function logDog() {
    console.log(dog);
  }

  logDog();
}

go(); // sunny


const fruit = "apple";

function printFruit() {
  console.log(fruit);
}

function start() {
  const fruit = "mango";
  printFruit();
}

start(); // apple

// function outer() {
//   const animal = "dog";

//   function inner() {
//     console.log(animal);
//   }

//   return inner;
// }

//const fn = outer();
//fn(); // dog


let count = 0;

function makeCounter() {
  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

//console.log(counter1()); // ?
//console.log(counter1()); // ?
//console.log(counter2()); // ?


function createUser(name) {
  let reputation = 0;

  return {
    upvote: () => reputation++,
    getReputation: () => reputation,
  };
}

const alice = createUser("Alice");
const bob = createUser("Bob");

alice.upvote();
alice.upvote();
bob.upvote();

//console.log(alice.getReputation()); // 2
//console.log(bob.getReputation());   // 1

// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log("var:", i);
//   }, 100);
// }

// for (let j = 1; j <= 3; j++) {
//   setTimeout(function () {
//     console.log("let:", j);
//   }, 100);
// }

// //var = one shared variable for the whole loop.let = new variable binding each iteration.

// for (var i = 1; i <= 3; i++) {
//   (function(iCopy) {
//     setTimeout(() => console.log("fixed var:", iCopy), 100);
//   })(i);
// }

// Here’s what happens on each iteration:When the loop is at i = 1:
// The IIFE is immediately called with argument 1.So inside that IIFE, iCopy = 1.
// The closure now “remembers” its own private variable iCopy = 1.
// When the loop is at i = 2:New IIFE runs, iCopy = 2.
// That closure remembers its own private variable = 2.When the loop is at i = 3:Same story, iCopy = 3.

// Result: 3 different variables (iCopy), each locked inside a closure.So you get 1, 2, 3.

console.log(`----------------------------------------------------------------------`)
//       function outer1() {
//         const outerVar = "Hey I am the outer Var";

//   function inner1() {
//           const innerVar = "hey I am an inner var";
//           console.log(innerVar);
//           console.log(outerVar);
//         }
//    return inner1
//       }
// const innerFn = outer1();
// innerFn()

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));

function createGame(gameName){
  let score = 0;

  return function win(){
    score ++;
    return `Your name ${gameName} score is ${score}`
  }
}

const hockeyGame = createGame('Hockey');
console.log(hockeyGame())
console.log(hockeyGame())
console.log(hockeyGame())
console.log(hockeyGame())