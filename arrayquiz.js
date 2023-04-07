// I've invited you to fill out a form:
// Arrays3
// Write a function that accepts an array of strings and console.logs each element using a for loop.
let arrNames = ["Nina","Alvin","Monica","Amani","Imani"];
for( let i = 0; i<arrNames.length; i++){
    console.log(arrNames[i]);
}


// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function numbs(nums){ 
nums.forEach(nums => {
    nums*=2
    console.log(nums*2);
});
}
let nums = [4,5,11,30,8,6];
numbs(nums)

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values


function arrayNumbers(arrNum) {
    for (let i = 0; i < arrNum.length; i++) {
        if(i < 4){
            arrNum[i]*=8
        }
        else if(i>=arrNum.length-2){
         arrNum[i]+=5
        }
    }
    console.log(arrNum);
}    
let arrNum= [4,5,11,30,8,6];
arrayNumbers(arrNum)




// Write a function that takes in the following array and 
//use a while loop to iterate and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];


function number(arr3){
    let i = 0;   
    while(i<arr3.length){
        console.log(arr3[i]);
        
        if(i === 4){
            break;
        }
        i++;
        
    }
    
}
let arr3= [1,2,3,4,5,6,7,8,9];
number(arr3)


// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']

function fruitsTypes(arrFruits) {
    for (let i = 0; i < arrFruits.length; i++) {
        if(i === 2){
            continue
        }
        console.log(arrFruits[i]);
    }
}
let fruits= ['apple','plum','banana','strawberries','kiwi']
fruitsTypes(fruits);