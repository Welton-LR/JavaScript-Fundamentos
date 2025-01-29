//Whithout template literals. We need to print this message em two lines.

let firstName = "Neo"
let message = "Hi, "+ firstName  +"!" +"\nWelcome to the Matrix!"
console.log(message);

//With template literals

message = `Hi, ${firstName}! 
Welcome to the Matrix!`
console.log(message);