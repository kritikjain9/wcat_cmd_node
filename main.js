let fs = require("fs");
let path = require('path');

let userInput = process.argv.slice(2);
// console.log(userInput);
let commandGiven = userInput.filter(inp => inp.length == 2);

switch(commandGiven){
        case "filepath":
          // code block
          break;
        case "":
          // code block
          break;
        default:
          // isme only "filepath waale ka result daal dena"
}
console.log(commandGiven);
