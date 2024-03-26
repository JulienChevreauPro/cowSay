const information= require ("./information.js");
const cowSay= require ("cowsay");

console.log (cowSay.say({
    text: `Hello, I'm ${information.myName} from ${information.myCampus}`
}));