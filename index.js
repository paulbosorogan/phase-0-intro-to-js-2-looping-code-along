// Code your solutions in this file
/*for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGfits(gifts){
    for (i=0; i< gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGfits(gifts);*/

function writeCards(stringNames, eventName){
    const newArray = [];
    for (let i=0; i < stringNames.length; i++){
        newArray.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
    return newArray;
}
writeCards(stringNames,eventName);

function countDown(n){
    let i=0;
    while (i<=n){
        console.log(n-i);
        i++;
    }
}
countDown(n); 