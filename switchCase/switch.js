/*In this case, if you choose a iten (weapon) , the code will show you a frase referent to 

character that you would be.*/

let yourIten = "sword";

switch(yourIten) {
      case "sword" :
            console.log("You are a Warrior!");
            break;
      case "magic" :
            console.log("You are a Wizard!");
            break;
      case "bow and arrow" :
            console.log("You are an Archer!");
            break;
     default:
            console.log("no match!");
      }