#! /usr/bin/env node

//Solution # 13 
// Your own array: Think of your favourite mode of transportation, such as motorcycle or a car, and make a list that stores several 
// examples. Use your list to print a series of statement about these items, such as " I would like a Honda motorcycle. "


let Transportation: string[]= ["Car", "Bike", "Bus"]

for(let i=0; i<Transportation.length; i++){
    console.log("I would like to own a " + Transportation[i])
};
