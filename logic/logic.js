console.log('Hello, Logic')

let x = 10; //global variable
if(x > 2){
    console.log('Buy black marker')
    // Code
    // let x = 20;
    // const x = 20;
    // console.log(x);
    // let y = 20; //local variable
    // console.log(y)
}else{
    // Alternative code
    console.log('Buy any color')
}

// EXERCISE
//1
const myVariable = true;
//2
console.log(myVariable)
//3
if(myVariable){
    console.log('My variable is true')
}
//4
if(!myVariable){
    console.log('My variable has been changed');
}

if(myVariable){
    console.log('My variable is true')
}else{
    console.log('My variable has been changed');
}

// ELSE-IF STATEMENT
const marker = 'black';
const markerLength = 'long';
 
if(marker === 'black' && markerLength === 'short'){
    console.log('Buy black and short marker')
}else if((marker === 'red' || marker === 'green') &&
markerLength === 'short'){
    console.log('Buy red or green marker and short')
}else{
    console.log('Buy any marker')
}

if(marker === 'black'){
    if(markerLength === 'short'){
        console.log('Buy black and short marker')
    }else {
        console.log('Let\'s manage the long one')
    }
}

// EXERCISE
//1
// const age = window.prompt();
//2
// const ageToNum = parseInt(age)
//3
// let message;
//4
// if(age >= 21){
//     message = 'You\'re allowed entry and can purchase alcohol';
// }else if(age >= 19){ //5
//     message = 'You\'re only allowed entry, you can\'t purchase alcohol'
     
// }else { //6
//    message = 'You\'re not allowed here, please go home'
// }
//7
// console.log(message)

// CONDITIONAL TERNARY OPERATOR
const gender = 'Male';

if(gender === 'Male'){
    console.log('He is a boy')
}else if (gender === 'Female'){
    console.log('She is a girl')
}else{
    console.log('He or she is others')
}

gender === 'Male' ? console.log('He is a boy') : gender
=== 'Female' ? console.log('She is a girl'): console.log
('He or she is others');

// EXERCISE3
//1
let id = true;
//2
const message = id ? 'You\'re allowed inside' : 'You\'re not allowed';
//3
console.log(message)

// SWITCH STATEMENT
const currentDay = 'Monday';

switch(currentDay){
    case 'Monday':
        console.log('I hate Mondays');
        break;
    case 'Tuesday':
        console.log('Tuesdays is no class');
        break;
    case 'Wednesday':
        console.log('I love Wednesdays');
        break;
    case 'Thursday':
        console.log('This is super story')
        break;
    case 'friday':
        console.log('Thank God is Friday (TGIF') 
        break;
    case 'saturday':
        console.log('And on the 7th day, He Rested')
        break;
    case 'Sunday':
        console.log('See you all after service')
        break;
    default:
        console.log('Invalid day selected')                           

}





