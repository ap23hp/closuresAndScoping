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


function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }
//This is a common pattern in JavaScript called a factory function with closures.
// It lets you create multiple “instances” (like users).
//It hides private data (reputation) so no one can mess with it directly.
//It only exposes controlled ways to interact with that data (getReputation, giveReputation).
//It’s almost like having private fields in a class, but using functions and closures instead.
