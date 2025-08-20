const personFactory = (name, age) => {

  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

// const jeff = personFactory('jeff', 27);

// console.log(jeff.name);

// jeff.sayHello();

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

const anotherFactory=(name,color,number,food)=>{

  return {name,color,number,food}
}

const a1=anotherFactory("Maynard","red",34,"rice")
console.log(a1.name)

let a = 17;

const func = x => {
  let a = x;
};

func(99);

console.log(a);



const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
  };
  
  const taco = FactoryFunction('taco');
  
  //printString();//ReferenceError: printString is not defined
//  capitalizeString(); //ReferenceError: capitalizeString is not defined
//  taco.capitalizeString(); //taco.capitalizeString is not a function
  //taco.printString();//----TACO----


    const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };
  
  const counter = counterCreator();
  //counter is closure , it has access to count
  counter();
  counter();
  counter();
  counter();


  console.log("*******************************************")

  const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName};
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy); //jeff,level5 jimmie has damaged jeff,

  // jimmie.die();//this will not work as this is private function and we have encapsulated it.
  // health++

  console.log("*******************************************")
  const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName};
  }
  
  const Nerd = (name) => {
    const {sayName} = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return {sayName, doSomethingNerdy};
  }
  
  const jeff = Nerd('jeff');
  
  jeff.sayName();
  jeff.doSomethingNerdy(); 

  // const Nerd = (name) => {
  //   const prototype = Person(name);
  //   const doSomethingNerdy = () => console.log('nerd stuff');
  //   return Object.assign({}, prototype, {doSomethingNerdy});
  // }

  //Object.assign({}, prototype, { doSomethingNerdy }) creates a new empty target {} and copies enumerable own properties
  //  from prototype and then from { doSomethingNerdy } onto that target.


  console.log("----------------------MODULE----------------")

  const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
  
  // IIFE - Immediately Invoked Function Expression
  
  calculator.add(3,5);
  calculator.sub(6,2);
  calculator.mul(14,5534);

  //(() => { ... })() defines an anonymous function and executes it immediately.

// Inside, you define private helper functions (add, sub, etc.).
// You return an object containing references to them.
// That object is assigned to calculator.
// Now instead of polluting global scope with 4 functions, you have one global variable: calculator.
// The only global identifier is calculator.

// add, sub, etc. live inside that namespace as properties.

// You don’t risk conflicts with another add in some other file.
//Namespacing = putting your functions/variables into a single "container" object so they don’t clash with global scope.