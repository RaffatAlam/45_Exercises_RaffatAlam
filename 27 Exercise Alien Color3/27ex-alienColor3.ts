/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
let alienColors : string = "green";
//version 1
if(alienColors==="green"){
    console.log("Version 1: Player just earned 5 points.!");

}else if(alienColors==="yellow"){
    console.log("Player just earned 10 points");

}else if(alienColors==="red"){
    console.log("Player just earned 15 points");
}
else{
    console.log("Please select Right Color.!")
}

//version 2
 alienColors = "yellow";
if(alienColors==="green"){
    console.log("Player just earned 5 points");

}else if(alienColors==="yellow"){
    console.log("Version 2: Player just earned 10 points.!");

}else if(alienColors==="red"){
    console.log("Player just earned 15 points");
}else{
    console.log("Please select Right Color.!")
}

//version 3
alienColors = "red";
if(alienColors==="green"){
    console.log("Player just earned 5 points");

}else if(alienColors==="yellow"){
    console.log("Player just earned 10 points");

}else if(alienColors==="red"){
    console.log("Version 3: Player just earned 15 points.!");
}
else{
    console.log("Please select Right Color.!")
}