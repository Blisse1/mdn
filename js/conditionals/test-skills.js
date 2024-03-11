// Task I
let season = 'winter';
// let response;

// Add your code here
if(season === 'summer'){
    response = 'It\'s summer!';
}else if (season === 'winter'){
    response = 'It\'s winter';
}else{
    response = 'We don\'t know what season it is.';
}
console.log(response);

// Task II

let response;
let score = 100;
let machineActive = true;

// Add your code here

if(machineActive){
    if(score < 0 || score > 100){
        response = "This is not possible, an error has occurred";
    }else if(score >= 0 && score <= 19){
        response = "That was a terrible score — total fail!";
    }else if(score >= 20 && score <= 39){
        response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
    }else if(score >= 40 && score <= 69){
        response = "You did a passable job, not bad!";
    }else if(score >= 70 && score <= 89){
        response = "That\'s a great score, you really know your stuff.";
    }else {
        response = "What an amazing score! Did you cheat? Are you for real?";
    }
}else{
    response = "You need to turn on the machine!"
}

// Conditionals III
if(machineActive){
    machineResult = "The machine is on!";
    pwd === "cheese" ? pwdResult = "You're logged successfully" : pwdResult = "Your attempt wasn't successful";
}else{
    machineResult = "The machine is off!";
}

